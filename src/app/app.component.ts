import { Component } from '@angular/core';
import { LoadingState, Person } from './if-loaded.directive';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  state: LoadingState<Person> = {
    type: 'loading'
  }

  constructor() {
    setTimeout(() => {
      this.state = {
        type: 'loaded',
        data: {
          name: 'Name'
        }
      }
    }, 10000)
  }
}
