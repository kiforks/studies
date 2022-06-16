import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[iterate]',
})
export class IterateDirective implements OnInit {
  @Input('iterateOf') items!: string[];

  constructor(
    private templateRef: TemplateRef<{'$implicit': any, index: number}>,
    private containerRef: ViewContainerRef ) {}

  public ngOnInit() {
    for(let i = 0; i< this.items.length; i++){
      this.containerRef.createEmbeddedView(this.templateRef, {
        index: i,
        '$implicit': this.items[i]
      })
    }
  }
}
