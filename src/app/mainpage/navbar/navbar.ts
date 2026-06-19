import { Component,Input } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [MatDivider, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   @Input() collectionsTarget!: HTMLElement;

  scrollToCollections() {
    if (this.collectionsTarget) {
      this.collectionsTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
