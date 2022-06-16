 import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

 export type Loaded<T> = { type: 'loaded', data: T };
 export type Loading = { type: 'loading' };
 export type LoadingState<T> = Loaded<T> | Loading;

 export interface Person {
   name: string;
 }

@Directive({
  selector: '[ifLoaded]'
})
export class IfLoadedDirective<T> {
  @Input('ifLoaded') set state(state: LoadingState<T>) {
    if(state.type === 'loaded') {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>
  ) {}

  static ngTemplateGuard_ifLoaded<T>(directive: IfLoadedDirective<T>, expression: LoadingState<T>): expression is Loaded<T> {
    return true
  }
}
