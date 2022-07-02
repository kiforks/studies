import { Component, Input } from '@angular/core';

@Component({
	selector: 'goal',
	templateUrl: './goal.component.html',
	styleUrls: ['./goal.component.scss'],
})
export class GoalComponent {
  @Input() public goal: any;
}
