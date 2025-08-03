import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from "src/app/modules/material/material.module";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    GalleryRoutingModule,
    IonicModule,
    MaterialModule
]
})
export class GalleryModule { }
