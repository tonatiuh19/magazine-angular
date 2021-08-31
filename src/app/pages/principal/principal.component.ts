import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MethodsService } from '../../services/methods/methods.service';
import { decode_utf8 } from '../../../assets/tools/stringsTreatment';
import { DomSanitizer } from '@angular/platform-browser';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private methodsService: MethodsService,
    private sanitizer: DomSanitizer,
    private shareService: ShareService
  ) {}

  navBarHide: boolean = false;
  loading: boolean = true;
  content: any = [];
  title: string = '';
  short_content: string = '';
  date: string = '';
  author: string = '';
  img: string = '';
  type: string = '';
  id: string = '';
  titleFixed: string = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ type, id, title }) => {
      if (id) {
        this.getContent(id);
        this.type = type;
        this.id = id;
        this.titleFixed = title;
      }
    });

    this.shareService.setFacebookTags(
      `https://agustirri.com/${this.type}/${this.id}/${this.titleFixed}`,
      this.title,
      this.short_content,
      this.img
    );
  }

  getContent(idPost: number) {
    this.methodsService.getPostContent(idPost).subscribe(
      (resp) => {
        this.content = resp;
        this.title = decode_utf8(this.content[0].titulo);
        this.short_content = decode_utf8(this.content[0].short_content);
        this.date = this.content[0].date_created;
        this.img = this.content[0].img;

        this.shareService.setFacebookTags(
          `https://agustirri.com/${this.type}/${this.id}/${this.titleFixed}`,
          this.title,
          this.short_content,
          this.img
        );
        this.loading = false;
      },
      (err) => {
        console.log('Houston', err);
      }
    );
  }

  getHTML(str: any) {
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }
}
