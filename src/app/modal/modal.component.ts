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
  @Input() methodeName : String;

  ngOnInit() {
  }

  closeModal() {
    console.log("close");
    console.log("save title value : " + this.title);
    this.appService.saveText(this.title);
    $("#"+this.idModal).modal("hide");
  }

}