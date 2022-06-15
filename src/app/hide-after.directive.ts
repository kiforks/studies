import {
	Directive,
	Input,
	OnInit,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';

@Directive({
	selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
	@Input('hideAfter') delay = 0;
	// @ts-ignore
	@Input('hideAfterLater') placeholder: TemplateRef<any> | null = null;

	constructor(
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<null>
	) {}

	ngOnInit(): void {
		this.viewContainerRef.createEmbeddedView(this.templateRef);

		setTimeout(() => {
			this.viewContainerRef.clear();

			if (this.placeholder) {
				this.viewContainerRef.createEmbeddedView(this.placeholder);
			}
		}, this.delay);
	}
}
