import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubAvatarService {
  private apiRoot : string = 'https://api.github.com/users/';

  constructor(private http: Http) { }
  
  getUrl = ( name : string) => this.http.get(this.apiRoot + name).map(res => res.json().avatar_url );

}
