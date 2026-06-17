import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { Mainpage } from "./mainpage/mainpage";
import { Homepagelogin } from "./homepagelogin/homepagelogin";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('houseofdrithi');
}
