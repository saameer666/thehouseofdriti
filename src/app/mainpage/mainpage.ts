import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Maincard } from './maincard/maincard';
import { Collections } from './collections/collections';



@Component({
  selector: 'app-mainpage',
  standalone:true,
  imports: [Navbar,Maincard,Collections],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.css',
})
export class Mainpage {

}
