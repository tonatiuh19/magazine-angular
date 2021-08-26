import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  navBarHide: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ title }) => {
      if (title) {
        console.log('hola', title);
      }
    });
  }
}
