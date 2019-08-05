import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Angular';
  text = 'The text';

  public showModal(text:String) {
    console.log("showModal : the text value to input" : text);
    this.text = text;
  }

}
