import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit {
  addRequestForm?: FormGroup;


  constructor(private fb: FormBuilder, private requestService: RequestService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.addRequestForm = this.fb.group({
      device: ['', [Validators.required]],
      parameters: ['', [Validators.required]],
      reason: ['', [Validators.required]],
    });
  }

  addRequest(): void {
    this.addRequestForm?.markAllAsTouched();

    if (this.addRequestForm?.valid) {
      let device: String = this.addRequestForm.controls['device'].value;
      let parameters: String = this.addRequestForm.controls['parameters'].value;
      let reason: String = this.addRequestForm.controls['reason'].value;
      const createRequest = {device: device, parameters: parameters, reason: reason, status: 'izskata'};
      this.requestService.create(createRequest)
    }
  }
}
