import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IUsers } from './users';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get<IUsers[]>(API_URL + '/users')
  };

  public validateLogin(userName: string, password: string) {
    const params = new HttpParams()
      .set('userName', userName)
      .set('password', password);
    return this.http.get<IUsers[]>(API_URL + '/users/', { params: params })
  };

  public getUserByUserName(userName: string) {
    const params = new HttpParams()
      .set('userName', userName);
    return this.http.get<IUsers[]>(API_URL + '/users/', { params: params })
  };

  public saveUser(user: IUsers) {
    return this.http.post<IUsers>(API_URL + "/users", user)
  }

  public forgotPasswordUpdate(users: IUsers, id: number, data: any) {
    users.password = data.password;
    return this.http.put(API_URL + '/users/' + id, users)
  }

  public deleteId (id:number) {
    return this.http.delete(API_URL + '/users/' + id)
  }

}
