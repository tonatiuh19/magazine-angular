import { Component, Input, OnInit } from '@angular/core';
import { MethodsService } from '../../services/methods/methods.service';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.scss'],
})
export class ContentCardsComponent implements OnInit {
  constructor() {}

  @Input() content: any;
  @Input() loading: boolean = true;
  posts: [] = [];

  ngOnInit(): void {
    this.getContentCards();
  }

  getContentCards() {}
}
