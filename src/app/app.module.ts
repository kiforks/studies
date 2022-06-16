import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HideAfterComponent } from './components/hide-after/hide-after.component';
import { HideAfterDirective } from './hide-after.directive';

@NgModule({
	declarations: [AppComponent, HideAfterDirective, HideAfterComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
