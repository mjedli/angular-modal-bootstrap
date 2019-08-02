import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() title : String;

  ngOnInit() {
  }

  closeModal() {
    console.log("close");
    console.log("save title value : " + this.title);
    $("#exampleModalLive").modal("hide");
  }

}