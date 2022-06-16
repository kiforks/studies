import {
	Directive,
	Input,
	OnInit,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';

class HideAfterContext {
  public get $implicit() {
    return this.hideAfter;
  }
	public hideAfter = 0;
	public counter = 0;
}

@Directive({
	selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
	private readonly context = new HideAfterContext();

	@Input('hideAfter') set delay(value: number | null) {
		this._delay = value ?? 0;
    this.context.hideAfter = this.context.counter = this._delay / 1000;
	}

	private _delay = 0;

	@Input('hideAfterThen') public placeholder: TemplateRef<any> | null = null;

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<null>
	) {}

	ngOnInit(): void {
		this.viewContainerRef.createEmbeddedView(
			this.templateRef,
			this.context
		);

    const intervalId = setInterval(() => {
      this.context.counter--;
    }, 1000)

		setTimeout(() => {
			this.viewContainerRef.clear();

			if (this.placeholder) {
				this.viewContainerRef.createEmbeddedView(
					this.placeholder,
          this.context
				);
			}

      clearInterval(intervalId);
		}, this._delay);
	}
}
