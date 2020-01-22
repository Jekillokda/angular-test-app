import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { HttpService} from './shared/http.service';
import { LogService } from './shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit{
  users: User[]=[];
  url = "assets/users.json"
  constructor(private httpService: HttpService, private logService: LogService){}

  ngOnInit(){
    this.httpService.getUsers(this.url).subscribe(data => this.users=data);
    this.logService.log("loaded Users from " + this.url)
  }
  title:string = 'angular-test-app';
}
