import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Angular';
  text = 'The text 200';

  public showModal(text:String) {
    console.log(text);
    this.text = text;
  }

}
