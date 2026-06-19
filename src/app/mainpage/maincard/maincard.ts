import { Component } from '@angular/core';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-maincard',
  standalone:true,
  imports: [MatDivider],
  templateUrl: './maincard.html',
  styleUrl: './maincard.css',
})
export class Maincard {
  get imagepath (){
    return 'assets/logo.png';
  }
}
