import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LogService} from "./log.service"
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import {User} from '../user';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
    getUsers(url) : Observable<User[]> {
        return this.http.get(url).pipe(map(data=>{
            let usersList = data["userList"];
            return usersList.map(function(user:any) {
                return {name: user.userName, age: user.userAge};
              });
        }));
    }
}