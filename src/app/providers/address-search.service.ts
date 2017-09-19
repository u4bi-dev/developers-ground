import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AddressSearchService {
  private apiRoot : string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  constructor(private http: Http) { }

  search = ( name : string) => this.http.get(this.apiRoot + name).map(res => res.json().results.map(item =>{

    return {
      dong : item.address_components[0].long_name,
      si   : item.address_components[1].long_name,
      do   : item.address_components[2].long_name
    }

  }));
  
}
