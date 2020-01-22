import { Component, Input } from "@angular/core";
import {LogService} from "../../shared/log.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})

export class HeaderComponent{
  count = 0;
  @Input() appTitle: string;
  constructor(private _logService: LogService) { }  

  increase() : void {
    this.count++;
    this._logService.log("count++_" + this.count);
}

  decrease() : void {
    this.count--;
    this._logService.log("count--_" + this.count);
}
}