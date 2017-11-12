import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Item, InventoryService }  from './inventory.service';

@Component({
  template: `
    <h2>INVENTORY</h2>
    <ul class="items">
      <li *ngFor="let item of items$ | async"
        [class.selected]="item.id === selectedId">
        <a [routerLink]="['/inventory', item.id]">
          <span class="badge">{{ item.id }}</span>{{ item.name }}
        </a>
      </li>
    </ul>
  `
})
export class InventoryListComponent implements OnInit {
  items$: Observable<Item[]>;

  private selectedId: number;

  constructor(
    private service: InventoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.items$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getItems();
      });
  }
}
