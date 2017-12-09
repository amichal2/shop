import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Item } from './inventory.model';

const ITEMS = [
  new Item(11, 'a'),
  new Item(12, 'b'),
  new Item(13, 'c'),
  new Item(14, 'd'),
  new Item(15, 'e'),
  new Item(16, 'f')
];

@Injectable()
export class InventoryService {
  getItems() { return Observable.of(ITEMS); }

  getItem(id: number | string) {
    return this.getItems()
      // (+) before `id` turns the string into a number
      .map(items => items.find(item => item.id === +id));
  }
}
