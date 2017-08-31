import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

@Injectable()
export class PopupService {

  activateDay(date: Date) {
    if (date > new Date()){
      window.alert("Cannot add a day later than today!");
    }else {
      window.prompt("Required working minutes","450");
    }
  }
}
