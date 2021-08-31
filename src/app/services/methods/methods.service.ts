import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MethodsService extends BaseService {
  private apiUrl: string = environment.apiBaseUrl;

  constructor(protected http: HttpClient) {
    super(http);
  }

  getPostTypesNavBar(): Observable<any> {
    return this.doPost(`${this.apiUrl}getPostTypesNavBar.php`, {});
  }

  getPostHeader(): Observable<any> {
    return this.doPost(`${this.apiUrl}getPostHeader.php`, {});
  }

  getMainPostsbyType(id_post_type: number): Observable<any> {
    return this.doPost(`${this.apiUrl}getMainPostsbyType.php`, {
      id_post_type: id_post_type,
    });
  }

  getMinImage(idPost: number): Observable<any> {
    return this.doPost(`${this.apiUrl}getMinImage.php`, {
      id_post: idPost,
    });
  }

  getPostsByType(id_post_type: number): Observable<any> {
    return this.doPost(`${this.apiUrl}getPostsByType.php`, {
      id_post_type: id_post_type,
    });
  }

  getPostContent(id_post: number): Observable<any> {
    return this.doPost(`${this.apiUrl}getPostContent.php`, {
      id_post: id_post,
    });
  }
}
