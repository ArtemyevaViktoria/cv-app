import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	NbButtonModule,
	NbCardModule,
	NbInputModule,
	NbLayoutModule,
	NbStepperModule,
	NbThemeModule,
} from '@nebular/theme';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [AppComponent, StepperComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		NgbModule,
		NbThemeModule.forRoot({ name: 'cosmic' }),
		NbLayoutModule,
		NbButtonModule,
		NbStepperModule,
		NbCardModule,
		NbInputModule,
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
