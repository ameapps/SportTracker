import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/services/App/Gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  constructor(private componentService: GalleryService) { }

  ngOnInit() {}

}
