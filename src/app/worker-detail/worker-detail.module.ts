import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerDetailPageRoutingModule } from './worker-detail-routing.module';

import { WorkerDetailPage } from './worker-detail.page';

import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerDetailPageRoutingModule,
    StarRatingModule
  ],
  declarations: [WorkerDetailPage]
})
export class WorkerDetailPageModule {}
