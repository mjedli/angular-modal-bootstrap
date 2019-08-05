import { Component, OnInit, Input } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'my-app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  constructor(public appService : AppService) { }

  @Input() title : String;
  @Input() modalId : String;
  @Input() text : String;

  @Input() closeLabel : String;
  @Input() saveLabel : String;

  ngOnInit() {
  }

  saveChangeModal(idmodal:String) {

    console.log("close" + " : " + idmodal);

    if(idmodal == "exampleModalLive1") {
      console.log("save title value : " + this.title);
      this.appService.saveText(this.text);
    }
    
  }

}