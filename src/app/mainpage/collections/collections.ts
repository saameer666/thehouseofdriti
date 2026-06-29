import { Component, signal } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { collection } from './collection-card/collection';
import { CollectionCard } from './collection-card/collection-card';




@Component({
  selector: 'app-collections',
  imports: [MatDivider,CollectionCard],
  templateUrl: './collections.html',
  styleUrl: './collections.css',
})
export class Collections {
  collection = signal(collection);
}
