import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public courseGoals = [
    { title: 'Master angular styling', isActiveGoal: true},
    { title: 'Understand angular animations', isActiveGoal: false },
    { title: 'Master angular animations', isActiveGoal: false },
  ];
}
