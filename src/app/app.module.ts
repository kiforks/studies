import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './resolution-modifiers/components/test/test.component';
import { LoggerService } from './resolution-modifiers/services/logger.service';

@NgModule({
	declarations: [AppComponent, TestComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [LoggerService],
	bootstrap: [AppComponent],
	exports: [TestComponent],
})
export class AppModule {}
