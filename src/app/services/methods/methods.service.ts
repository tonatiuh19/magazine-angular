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

  getPostTypes(): Observable<any> {
    return this.doPost(`${this.apiUrl}getPostsTypes.php`, {});
  }

  getMainPostsByType(): Observable<any> {
    return this.doPost(`${this.apiUrl}getMainPostsByType.php`, {});
  }
}
