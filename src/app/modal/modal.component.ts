import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() title : String;
  @Input() idModal : String;
   @Input() text : String;

  ngOnInit() {
  }

  closeModal() {
    console.log("close");
    console.log("save title value : " + this.title);
    $("#"+this.idModal).modal("hide");
  }

}