import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Homepagelogin } from "./homepagelogin/homepagelogin";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepagelogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('houseofdrithi');
}
