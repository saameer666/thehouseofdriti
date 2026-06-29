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
  openInstagram(){
    window.open(
      'https://www.instagram.com/thehouseof_dhriti?igsh=Y29pNnVmZGNsZWV0',
      '_blank',
      'noopener,noreferrer'
    );
  }
  openWhatsApp(){
    window.open(
      'https://api.whatsapp.com/send/?phone=%2B918897408084&text&type=phone_number&app_absent=0',
      '_blank',
      'noopener,noreferrer'
    );
  }
}
