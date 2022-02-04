import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponserUsers, ResponseCreate } from '../Modules/user.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService
{

  private url="https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

    getUsers(): Observable<ResponserUsers>
    {
        return this.http.get<ResponserUsers>(this.url);
    }

    postUser(request: RequestCreate): Observable<ResponseCreate>
    {
        return this.http.post<ResponseCreate>(this.url, request);
    }

}
