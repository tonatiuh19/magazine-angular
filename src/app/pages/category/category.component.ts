import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MethodsService } from '../../services/methods/methods.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private methodsService: MethodsService
  ) {}

  navBarHide: boolean = false;
  categories: [] = [];
  post_type: number = 0;
  category: string = '';
  short_content: string = '';
  content = ([] = []);
  loadingContent: boolean = true;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ type }) => {
      if (type) {
        if (type === 'deportes') {
          this.post_type = 1;
          this.category = 'Deportes';
        } else if (type === 'ciencia') {
          this.post_type = 2;
          this.category = 'Ciencia';
        } else if (type === 'videojuegos') {
          this.post_type = 3;
          this.category = 'VideoJuegos';
        } else if (type === 'musica') {
          this.post_type = 4;
          this.category = 'Música';
        } else if (type === 'cineytv') {
          this.post_type = 5;
          this.category = 'Cine y TV';
        } else if (type === 'tecnologia') {
          this.post_type = 6;
          this.category = 'Tecnología';
        } else if (type === 'cultura') {
          this.post_type = 7;
          this.category = 'Cultura';
        } else if (type === 'anime') {
          this.post_type = 8;
          this.category = 'Anime';
        } else {
          this.router.navigate(['']);
        }
        console.log(this.post_type);
        this.getPostInfo(this.post_type);
      }
    });
  }

  processTypes(e: any) {
    this.categories = e;
  }

  getPostInfo(type: number) {
    this.methodsService.getPostsByType(type).subscribe(
      (resp) => {
        this.content = resp;
        this.loadingContent = false;
      },
      (err) => {
        console.log('Houston', err);
      }
    );
  }
}
