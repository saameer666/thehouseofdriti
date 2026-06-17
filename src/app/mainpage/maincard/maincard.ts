import { Component } from '@angular/core';

@Component({
  selector: 'app-maincard',
  standalone:true,
  imports: [],
  templateUrl: './maincard.html',
  styleUrl: './maincard.css',
})
export class Maincard {
  get imagepath (){
    return 'assets/logo.png';
  }
}
