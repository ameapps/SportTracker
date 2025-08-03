import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/services/App/Gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  isLoading = true;
  isTimeout = false;
  timeoutRef: any;
  folder = 'Gallery';

  // Selezione multipla
  isSelectionMode = false;
  selectedPhotos: number[] = [];
  longPressTimeout: any;

  constructor(public router: Router, public componentService: GalleryService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.isLoading = true;
    this.isTimeout = false;
    this.isSelectionMode = false;
    this.selectedPhotos = [];
    // Timeout di 30 secondi
    this.timeoutRef = setTimeout(() => {
      if (!this.componentService.photos || this.componentService.photos.length === 0) {
        this.isTimeout = true;
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    }, 30000);

    // Polling per vedere quando arrivano le foto
    const poll = setInterval(() => {
      if (this.componentService.photos && this.componentService.photos.length > 0) {
        this.isLoading = false;
        clearTimeout(this.timeoutRef);
        clearInterval(poll);
        this.cdr.detectChanges();
      }
    }, 500);
    console.info('gallery component initialized');
  }

  // #region methods


  /**Method to scroll the page at the specified element in the page */
  smoothScroll(id: number) {
    const el: HTMLElement = document.getElementById(`gallery-photo-${id}`);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  // Long press per attivare la selezione
  startLongPress(i: number) {
    this.longPressTimeout = setTimeout(() => {
      this.isSelectionMode = true;
      this.togglePhotoSelection(i);
    }, 500);
  }

  cancelLongPress() {
    clearTimeout(this.longPressTimeout);
  }

  // Seleziona/deseleziona foto
  togglePhotoSelection(i: number) {
    if (!this.isSelectionMode) return;
    const idx = this.selectedPhotos.indexOf(i);
    if (idx > -1) {
      this.selectedPhotos.splice(idx, 1);
    } else {
      this.selectedPhotos.push(i);
    }
  }

  // Esce dalla modalità selezione
  clearSelection() {
    this.isSelectionMode = false;
    this.selectedPhotos = [];
  }

  // Elimina le foto selezionate
  deleteSelectedPhotos() {
    if (this.selectedPhotos.length === 0) return;
    this.selectedPhotos.sort((a, b) => b - a); // Elimina dall'ultimo per non shiftare gli indici
    for (const idx of this.selectedPhotos) {
      this.componentService.photos.splice(idx, 1);
    }
    this.clearSelection();
    this.cdr.detectChanges();
  }

  photoInfo(photoInfo: string) {
    // Getting the only numbers from the string
    const valid = Number(photoInfo.replace(/\D/g, ''));
    const date: Date = new Date(valid);
    const format = `${date.toLocaleDateString(
      'it-IT'
    )} ${date.toLocaleTimeString('it-IT')}`;
    return format;
  }

  // #endregion
}
