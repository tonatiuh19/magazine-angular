import { Component, Input, OnInit } from '@angular/core';
import { MethodsService } from '../../services/methods/methods.service';
import {
  decode_utf8,
  getTitleByType,
} from '../../../assets/tools/stringsTreatment';
import { Router } from '@angular/router';
import { removeAccents } from '../../../assets/tools/stringsTreatment';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export class CardPostComponent implements OnInit {
  constructor(private methodsService: MethodsService, private router: Router) {}
  @Input() post: any;

  title: string = 'Example';
  img: string = '';
  type: any = {};
  loading: boolean = true;

  ngOnInit(): void {
    this.title = decode_utf8(this.post.titulo);
    this.type = getTitleByType(this.post.id_post_type);
    this.getPostImage(this.post.id_post);
  }

  getPostImage(id_post: number) {
    this.methodsService.getMinImage(id_post).subscribe(
      (resp) => {
        this.img = resp[0];
        this.loading = false;
      },
      (err) => {
        console.log('Houston', err);
      }
    );
  }

  onClick() {
    //console.log(this.post);
    this.router.navigate([
      removeAccents(
        decode_utf8(this.post.name.replace(/\s/g, '')).toLowerCase()
      ) +
        '/' +
        this.post.id_post +
        '/' +
        decode_utf8(this.post.titulo).replace(/\s+/g, '-'),
    ]);
  }

  goToType() {
    this.router.navigate([
      removeAccents(
        decode_utf8(this.post.name.replace(/\s/g, '')).toLowerCase()
      ),
    ]);
  }
}
