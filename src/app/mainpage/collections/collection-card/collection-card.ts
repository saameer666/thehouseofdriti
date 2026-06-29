import { Component,input } from '@angular/core';
import { collection } from '../collection.model';

@Component({
  selector: 'app-collection-card',
  imports: [],
  templateUrl: './collection-card.html',
  styleUrl: './collection-card.css',
})
export class CollectionCard {
  collection = input.required<collection>();
}
