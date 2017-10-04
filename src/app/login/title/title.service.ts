import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Title {

  public value = 'Login to PlexSync';

  constructor(
    public http: Http
  ) {}

  public getData() {
    console.log('Title#getData(): Get Data');
    /**
     * return this.http.get('/assets/data.json')
     * .map(res => res.json());
     */
    return {
      value: 'Login to PlexSync'
    };
  }

}
