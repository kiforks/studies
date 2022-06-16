import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HideAfterComponent } from './components/hide-after/hide-after.component';
import { HideAfterDirective } from './hide-after.directive';
import { IterateDirective } from './iterate.directive';
import { IterateComponent } from './components/iterate/iterate.component';
import { CarouselDirective } from './carousel.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IfLoadedDirective } from './if-loaded.directive';

@NgModule({
	declarations: [AppComponent, HideAfterDirective, HideAfterComponent, IterateDirective, IterateComponent, CarouselDirective, CarouselComponent, IfLoadedDirective],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
