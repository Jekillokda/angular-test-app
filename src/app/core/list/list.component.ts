import { Component } from "@angular/core";
export class Phone{
  constructor(public title: string, 
              public price: number, 
              public company: string)
  { }
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'] 
})

export class ListComponent{
 
    phone: Phone = new Phone("", 0, "Huawei");
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
     
    addPhone(){
        this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
        this.phone.price = 0
        this.phone.title = ""
    }
}