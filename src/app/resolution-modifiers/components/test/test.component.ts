import { Component, Optional } from '@angular/core';

import { LoggerService } from '../../services/logger.service';

@Component({
	selector: 'test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss'],
})
export class TestComponent {
	constructor(@Optional() private readonly LoggerService: LoggerService) {
		if (this.LoggerService) {
			this.LoggerService.log('constructor init');
		}
	}
}
