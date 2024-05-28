import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectManagementSample';
  randomNumber!: number;
routerLinkActive: any;
studentlistnew: object=[
  {id: 1, name: 'vinodh'}, {id: 2, name:'sam'},{id: 3, name: 'tenvinodh'}, {id: 4, name:'tensam'}];
// public onnumbergenerate(randomnumber : number)
// {
// this.randomnumbers= randomnumber; 
// }

public onNumberGenerated(randomNumber : number){
   
      this.randomNumber= randomNumber; 
     
}

}
