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
  public updateUser(users: IUsers, id: number, data: any) {
    if(data.firstName != null) 
      users.firstName = data.firstName
      if(data.lastName != null) 
      users.lastName = data.lastName
      if(data.dob != null) 
      users.dob = data.dob
      if(data.email != null) 
      users.email = data.email
      if(data.addressLine1 != null) 
      users.addressLine1 = data.addressLine1
      if(data.addressLine2 != null) 
      users.addressLine2 = data.addressLine2
      if(data.city != null) 
      users.city = data.city
      if(data.country != null) 
      users.country = data.country
      if(data.state != null) 
      users.state = data.state
      if(data.zipCode != null) 
      users.zipCode = data.zipCode
    return this.http.put(API_URL + '/users/' + users.id, users)
  }

  public deleteId (id:number) {
    return this.http.delete(API_URL + '/users/' + id)
  }

}
