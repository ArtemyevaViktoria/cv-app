import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbStepChangeEvent } from '@nebular/theme';
import { StoreDispatchFacade } from '../../shared/facades/store-dispatch.facade';

@Component({
	selector: 'cv-stepper',
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.scss',
})
export class StepperComponent {
	@Output()
	public resetExperiences = new EventEmitter();

	public personalForm!: FormGroup;

	public experiencesForm!: FormGroup;

	public educationsForm!: FormGroup;

	public changeEvent!: NbStepChangeEvent;

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

	public titles = ['Personal details', 'Experiences', 'Education'];

	public confirmForms() {
		console.log(this.personalForm.value);

		if (this.experiencesForm?.value) {
			console.log(this.experiencesForm.value);
		}
		if (this.educationsForm?.value) {
			console.log(this.educationsForm.value);
		}
	}

	public resetForms() {
		this._storeDispatch.resetForms();
	}
}
