import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MethodsService } from '../../services/methods/methods.service';
import { PostTypes } from '../../../interfaces/general.interfaces';
import {
  decode_utf8,
  removeAccents,
} from '../../../assets/tools/stringsTreatment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isHide: boolean = false;
  @Output() types = new EventEmitter<any[]>();
  categories: PostTypes[] = [];

  constructor(private methodsService: MethodsService, private router: Router) {}

  ngOnInit(): void {
    this.getPostTypes();
  }

  getPostTypes() {
    this.methodsService.getPostTypesNavBar().subscribe(
      (resp) => {
        for (let i in resp) {
          this.categories.push({
            id_post_type: resp[i].id_post_type,
            name: decode_utf8(resp[i].name),
            active: 0,
          });
        }
        this.types.emit(this.categories);
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

  goToType(item: any) {
    this.router.navigate([
      removeAccents(item.name.replace(/\s/g, '')).toLowerCase(),
    ]);
  }
}
