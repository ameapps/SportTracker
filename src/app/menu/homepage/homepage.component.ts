import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  navigateTo(path: string) {
    this.router.navigate([`/menu/${path}`]);
  }
}
