import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import {
  capitalizeFirstLetter,
  isValidDate,
} from '../../../assets/tools/stringsTreatment';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  constructor() {}

  @Input() titleSection: string = 'Example width';
  @Input() dateItem: string = '';
  @Input() author: string = 'Author example';
  @Input() short_content: string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s';
  date: string = '';
  noAuthor: boolean = false;

  ngOnInit(): void {
    moment.locale('es');
    if (isValidDate(this.dateItem)) {
      this.noAuthor = true;
      this.date = capitalizeFirstLetter(moment(this.dateItem).format('LLLL'));
    }
  }
}
