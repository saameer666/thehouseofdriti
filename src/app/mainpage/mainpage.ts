import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Maincard } from './maincard/maincard';
import { Collections } from './collections/collections';
import { Imagegallery } from "./imagegallery/imagegallery";
import { Carousel } from "./carousel/carousel";
import { Occasioncard } from "./occasioncard/occasioncard";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [Navbar, Maincard, Collections, Imagegallery, Carousel, Occasioncard],
  templateUrl: './mainpage.html',
  styleUrls: ['./mainpage.css']   // <-- use styleUrls here
})

export class Mainpage implements OnInit {
  isLoading: boolean = true;

  // 2. Inject it into your constructor
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      console.log('Loading finished! isLoading is now:', this.isLoading);
      
      // 3. Force Angular to scan the HTML template for changes right now
      this.cdr.detectChanges(); 
    }, 2000); 
  }
}