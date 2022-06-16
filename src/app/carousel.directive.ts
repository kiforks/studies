import {
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

@Directive({
  selector: '[carousel]',
})
export class CarouselDirective implements OnInit {
  @Input('carouselOf') images!: string[];

  currentIndex = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.renderCurrentSlide();
  }

  renderCurrentSlide(){
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, {
      ctr: this,
      '$implicit': this.images[this.currentIndex]
    })
  }

  next(){
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    this.renderCurrentSlide();
  }

  prev(){
    this.currentIndex =
      this.currentIndex - 1 < 0 ? this.images.length - 1: this.currentIndex - 1;
    this.renderCurrentSlide();
  }
}
