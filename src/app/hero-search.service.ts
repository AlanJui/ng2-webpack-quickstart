import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {Hero} from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private _http: Http) {}

  search(term: string): Observable<Hero[]> {
    const url = `app/heroes/?name=${term}`;

    return this._http.get(url)
      .map((resp: Response) => resp.json().data as Hero[]);
  }

}
