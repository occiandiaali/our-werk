import { Component, OnInit, Input } from '@angular/core';
import * as data from '../../assets/icon/data.json';



@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {

  workers: any = (data as any).default;

  @Input() category: string = 'Category Title';

  constructor() {  }


  ngOnInit() {
    console.log(this.workers); 
  }

} // class
