import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {HeroSearchService} from './hero-search.service';
import {Hero} from './hero';

@Component({
  // moduleId: module.id,
  selector: 'hero-search',
  styleUrls: ['hero-search.component.css'],
  templateUrl: 'hero-search.component.html',
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroes = this.searchTerms
      // wait for 300ms pause in events
      .debounceTime(300)

      // ignore if next search term is same as previous
      .distinctUntilChanged()

      // switch to new observable each time
      .switchMap(term => term
        ? this.heroSearchService.search(term)  // return the http search observable
        : Observable.of<Hero[]>([])             // or the observable of empty heroes if no search term
      )

      // catch search error
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
