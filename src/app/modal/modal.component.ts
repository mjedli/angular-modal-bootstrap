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
  @Input() idModal : String;
  @Input() text : String;

  ngOnInit() {
  }

  closeModal(idmodal:String) {

    if(idmodal == "exampleModalLive1") {
      console.log("close");
      console.log("save title value : " + this.title);
      this.appService.saveText(this.title + "test" + idmodal);
    }

    $("#"+this.idModal).modal("hide");
    
  }

}