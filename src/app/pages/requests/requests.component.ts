import {Component, OnInit} from '@angular/core';
import {RequestService} from "src/app/services/request.service";
import {TechRequest} from "src/app/models/techrequest.model";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  requests: TechRequest[] = [];

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.requestService.Refreshrequired.subscribe(respone => {
      this.getAll();
    });
  }

  getAll(): void {
    this.requestService.getAll().subscribe({
      next: (response) => {
        console.log('All requests:')
        console.log(response);
        this.requests = response;
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  delete(i: number) {
    let id = this.requests[i].id;
    this.requestService.delete(id);
    this.ngOnInit();
  }

  updateStatus(i: number, status: String) {
    let id = this.requests[i].id;
    this.requestService.update(id, status);
  }
}
