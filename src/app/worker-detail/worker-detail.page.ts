import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.page.html',
  styleUrls: ['./worker-detail.page.scss'],
})
export class WorkerDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    alert("Call: 08034096604");
  }

} // class
