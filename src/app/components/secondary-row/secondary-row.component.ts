import { Component, Input, OnInit } from '@angular/core';
import { MethodsService } from '../../services/methods/methods.service';
import { decode_utf8 } from '../../../assets/tools/stringsTreatment';

@Component({
  selector: 'app-secondary-row',
  templateUrl: './secondary-row.component.html',
  styleUrls: ['./secondary-row.component.scss'],
})
export class SecondaryRowComponent implements OnInit {
  constructor(private methodsService: MethodsService) {}

  @Input() type: number;
  posts: [] = [];
  noContent: boolean = false;
  title: string = '';

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.methodsService.getMainPostsbyType(this.type).subscribe(
      (resp) => {
        if (resp.length !== 0 && resp !== 0) {
          this.noContent = true;
          this.posts = resp;
          this.title = decode_utf8(resp[0].name);
        }
      },
      (err) => {
        console.log('Houston', err);
      }
    );
  }
}
