import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJan24';
  showLifeCycle:boolean=false;
value1:string="Mangai";
onShoworHide(){
this.showLifeCycle=!this.showLifeCycle;
}

}
