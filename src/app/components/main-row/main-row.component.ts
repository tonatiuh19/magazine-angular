import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../../services/methods/methods.service';

@Component({
  selector: 'app-main-row',
  templateUrl: './main-row.component.html',
  styleUrls: ['./main-row.component.scss'],
})
export class MainRowComponent implements OnInit {
  constructor(private methodsService: MethodsService) {}

  mainHeaderArr: [] = [];

  ngOnInit(): void {
    this.getMainPosts();
  }

  getMainPosts() {
    this.methodsService.getPostHeader().subscribe(
      (resp) => {
        this.mainHeaderArr = resp;
      },
      (err) => {
        console.log('Houston', err);
      }
    );
  }
}
