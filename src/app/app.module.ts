import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbInputModule,
	NbLayoutModule,
	NbStepperModule,
	NbThemeModule,
} from '@nebular/theme';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ExperiencesFormComponent } from './stepper/experiences-form/experiences-form.component';
import { EducationFormComponent } from './stepper/education-form/education-form.component';

@NgModule({
	declarations: [AppComponent, StepperComponent, ExperiencesFormComponent, EducationFormComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		NgbModule,
		NbEvaIconsModule,
		NbThemeModule.forRoot({ name: 'cosmic' }),
		NbLayoutModule,
		NbButtonModule,
		NbStepperModule,
		NbCardModule,
		NbInputModule,
		NbIconModule,
	],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
