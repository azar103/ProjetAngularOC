import { Component, OnInit, OnDestroy } from '@angular/core';
import {  AppareilService } from './services/appareil.service';
import { Observable,  Subject , interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
secondes: number;
counterSubscribe: Subscription;
constructor() {}
ngOnInit() {
  const counter = interval(1000);
  this.counterSubscribe = counter.subscribe(
    (value: number) => {
      this.secondes = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }

  );
}

ngOnDestroy() {
this.counterSubscribe.unsubscribe();
}

}
