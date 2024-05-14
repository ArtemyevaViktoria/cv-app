import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbStepChangeEvent } from '@nebular/theme';

@Component({
	selector: 'cv-stepper',
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.scss',
})
export class StepperComponent implements OnInit {
	public personalForm!: FormGroup;

	public experiencesForm!: FormGroup;

	public educationForm!: FormGroup;

	public changeEvent!: NbStepChangeEvent;

	public constructor(private _fb: FormBuilder) {}

	public ngOnInit() {
		this.personalForm = this._fb.group({
			name: ['', Validators.required],
			surname: ['', Validators.required],
			title: ['', Validators.required],
			address: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
		});
	}

	public onPersonalFormSubmit() {
		this.personalForm.markAsDirty();
	}

	public experiencesFormSubmit(form: FormGroup) {
		this.experiencesForm = form;
	}

	public educationFormSubmit(form: FormGroup) {
		this.educationForm = form;
	}

	public handleStepChange(e: NbStepChangeEvent): void {
		this.changeEvent = e;
	}

	public titles = ['Personal details', 'Experiences', 'Education'];

	public confirmForms() {
		console.log(this.personalForm.value);
		console.log(this.experiencesForm.value);
		console.log(this.educationForm.value);
	}
}
