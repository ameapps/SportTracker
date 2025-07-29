import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    IonicModule
  ]
})
export class GalleryModule { }
