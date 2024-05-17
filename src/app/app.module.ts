import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	NbButtonModule,
	NbCardModule,
	NbFormFieldModule,
	NbIconModule,
	NbInputModule,
	NbLayoutModule,
	NbSelectModule,
	NbStepperModule,
	NbThemeModule,
} from '@nebular/theme';
import { StepperComponent } from './component/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ExperiencesFormComponent } from './component/stepper/experiences-form/experiences-form.component';
import { EducationsFormComponent } from './component/stepper/educations-form/educations-form.component';
import { PersonalFormComponent } from './component/stepper/personal-form/personal-form.component';
import { SharedModule } from './shared/shared.module';
import { CvResultComponent } from './component/cv-result/cv-result.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CvDataEffects } from './shared/store/cv-data/cv-data.effects';
import { StoreModule } from '@ngrx/store';
import { cvDataReducer } from './shared/store/cv-data/cv-data.reducer';
@NgModule({
	declarations: [
		AppComponent,
		StepperComponent,
		ExperiencesFormComponent,
		EducationsFormComponent,
		PersonalFormComponent,
		CvResultComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		SharedModule.forRoot(),
		StoreModule.forRoot({ cvData: cvDataReducer }),
		EffectsModule.forRoot([CvDataEffects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		NbThemeModule.forRoot({ name: 'cosmic' }),
		NgbModule,
		NbEvaIconsModule,
		NbLayoutModule,
		NbButtonModule,
		NbStepperModule,
		NbCardModule,
		NbInputModule,
		NbIconModule,
		NbFormFieldModule,
		NbSelectModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
