import { Component } from '@angular/core';

@Component({
  selector: 'iterate',
  templateUrl: './iterate.component.html',
  styleUrls: ['./iterate.component.scss']
})
export class IterateComponent {
  public values = ['Mark', 'John', 'Sara'];
}
