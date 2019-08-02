import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AppService {
  
    constructor() { }

    saveText(text) {
        console.log("Service save text : "  + text);
    }
}