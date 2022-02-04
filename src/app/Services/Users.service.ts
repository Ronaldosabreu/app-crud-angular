import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponserUsers } from '../Modules/user.module';
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

}
