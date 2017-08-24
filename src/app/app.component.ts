import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedCharacter: {};
  constructor(private http: Http) { }

  ngOnInit() {
    const peopleAPI = 'https://swapi.co/api/people/1';
    const planetAPI = 'https://swapi.co/api/planets/1';
    let character = this.http.get(peopleAPI).map(res => res.json());
    let characterHomeworld = this.http.get(planetAPI).map(res => res.json());
  
    Observable.forkJoin([ character, characterHomeworld ])
      .subscribe(results => {
        results[0].homeworld = results[1];
        this.loadedCharacter = results[0];
      })
  }
}
