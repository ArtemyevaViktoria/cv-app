import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbButtonModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NbThemeModule.forRoot({ name: 'cosmic' }),
		NbLayoutModule,
		NbButtonModule,
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
