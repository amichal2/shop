import 'rxjs/add/operator/switchMap';
import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../animations';
import { Observable } from 'rxjs/Observable';
import { Item } from './inventory.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { InventoryService } from './inventory.service';
import { log } from 'util';

@Component({
  template: `
    <h2>Inventory detail</h2>
    <p>Inventory details here:</p>
    <div *ngIf="item$ | async as item">
      <h3>"{{ item.name }}"</h3>
      <div>
        <label>Id: </label>{{ item.id }}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="item.name" placeholder="name"/>
      </div>
      <p>
        <button (click)="gotoItems(item)">Back</button>
      </p>
    </div>
  `,
  animations: [ slideInDownAnimation ]
})
export class InventoryDetailComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  item$: Observable<Item>;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventoryService
  ) {}
 
  ngOnInit() {
    log("In Inventory Detail: " + this.item$);
    this.item$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getItem(params.get('id')));
  }

  gotoItems(item: Item) {
    let itemId = item ? item.id : null;
    this.router.navigate(['/inventory', { id: itemId, foo: 'foo' }]);
    }
 }
