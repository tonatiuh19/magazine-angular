import { Component, Input, OnInit } from '@angular/core';
import { MethodsService } from '../../services/methods/methods.service';
import { PostTypes } from '../../../interfaces/general.interfaces';
import { decode_utf8 } from '../../../assets/tools/stringsTreatment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isHide: boolean = false;
  categories: PostTypes[] = [];

  constructor(private methodsService: MethodsService) {}

  ngOnInit(): void {
    this.getPostTypes();
  }

  getPostTypes() {
    this.methodsService.getPostTypes().subscribe(
      (resp) => {
        console.log(resp);
        for (let i in resp) {
          this.categories.push({
            id_post_type: resp[i].id_post_type,
            name: decode_utf8(resp[i].name),
            active: 0,
          });
        }
      },
      (err) => {
        console.log('Houston', err);
      }
    );
  }

  changeCategory(id: number) {
    let newCategories = [];
    for (let i in this.categories) {
      if (this.categories[i].id_post_type === id) {
        newCategories.push({
          id_post_type: this.categories[i].id_post_type,
          name: this.categories[i].name,
          active: 1,
        });
      } else {
        newCategories.push({
          id_post_type: this.categories[i].id_post_type,
          name: this.categories[i].name,
          active: 0,
        });
      }
    }
    this.categories = newCategories;
  }
}
