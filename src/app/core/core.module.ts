import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import {ListComponent} from './list/list.component'
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations:[
    HeaderComponent,
    ListComponent
  ],
  exports:[
    HeaderComponent,
    ListComponent
  ]
})
export class CoreModule {}