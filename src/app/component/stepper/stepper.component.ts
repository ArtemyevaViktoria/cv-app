import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbStepChangeEvent, NbStepperComponent } from '@nebular/theme';
import { StoreDispatchFacade } from '../../shared/facades/store-dispatch.facade';

@Component({
	selector: 'cv-stepper',
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.scss',
})
export class StepperComponent {
	@ViewChild('stepper')
	public stepper!: NbStepperComponent;

	public personalForm!: FormGroup;

	public experiencesForm!: FormGroup;

	public educationsForm!: FormGroup;

	public changeEvent!: NbStepChangeEvent;

	public titles: string[] = ['Personal details', 'Experiences', 'Education'];

	public constructor(private _storeDispatch: StoreDispatchFacade) {}

	public personalFormSubmit(form: FormGroup) {
		this.personalForm = form;
	}

	public experiencesFormSubmit(form: FormGroup) {
		this.experiencesForm = form;
	}

	public educationsFormSubmit(form: FormGroup) {
		this.educationsForm = form;
	}

	public handleStepChange(e: NbStepChangeEvent): void {
		this.changeEvent = e;
	}

	public resetForms() {
		this.stepper.reset();
		this._storeDispatch.resetForms();
	}
}
