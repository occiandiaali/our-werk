import { Component } from '@angular/core';
import * as data from '../../assets/icon/cat-list.json';


@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class CategoriesPage {

  categories: any = (data as any).default;

  constructor() {}

}
