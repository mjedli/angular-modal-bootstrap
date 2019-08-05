import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AppService {
  
    constructor() { }

    saveText(text:String) {
        console.log("Service save text : "  + text);
    }

    saveTitle(title:String) {
        console.log("Service save title : "  + title);
    }
}