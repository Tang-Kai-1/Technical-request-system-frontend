import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject, tap} from 'rxjs';
import {TechRequest} from '../models/techrequest.model';

const baseUrl = 'http://localhost:8080/requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  getAll(): Observable<TechRequest[]> {
    return this.http.get<TechRequest[]>(baseUrl);
  }

  create(data: any): void {
    this.http.post(baseUrl, data).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    ).subscribe(({
      next: (response) => {
        console.log('Created object:')
        console.log(response);
      },
      error: (error) => {
        console.log(error.message);
      },
    }));
  }

  update(id: number, data: any): void {
    this.http.put(`${baseUrl}/${id}`, data).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    ).subscribe(({
      next: (response) => {
        console.log('Chnaged object:')
        console.log(response);
      },
      error: (error) => {
        console.log(error.message);
      },
    }));
  }

  delete(id: number): void {
    this.http.delete(`${baseUrl}/${id}`).pipe(
      tap(() => {
        this.Refreshrequired.next();
      })
    ).subscribe(({
      next: (response) => {
        console.log('Deleted object:')
        console.log(response);
      },
      error: (error) => {
        console.log(error.message);
      },
    }));
  }
}
