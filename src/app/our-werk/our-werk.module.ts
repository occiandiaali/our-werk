import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OurWerkPageRoutingModule } from './our-werk-routing.module';

import { OurWerkPage } from './our-werk.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OurWerkPageRoutingModule
  ],
  declarations: [OurWerkPage]
})
export class OurWerkPageModule {}
