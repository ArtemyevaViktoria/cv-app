import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'cv-stepper',
	templateUrl: './stepper.component.html',
	styleUrl: './stepper.component.scss',
})
export class StepperComponent implements OnInit {
	public firstForm!: FormGroup;

	public secondForm!: FormGroup;

	public thirdForm!: FormGroup;

	public constructor(private _fb: FormBuilder) {}

	public ngOnInit() {
		this.firstForm = this._fb.group({
			name: ['', Validators.required],
			surname: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
		});

		this.secondForm = this._fb.group({
			secondCtrl: ['', Validators.required],
		});

		this.thirdForm = this._fb.group({
			thirdCtrl: ['', Validators.required],
		});
	}

	public onFirstSubmit() {
		this.firstForm.markAsDirty();
	}

	public onSecondSubmit() {
		this.secondForm.markAsDirty();
	}

	public onThirdSubmit() {
		this.thirdForm.markAsDirty();
	}
}
