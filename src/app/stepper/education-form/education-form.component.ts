import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'cv-education-form',
	templateUrl: './education-form.component.html',
	styleUrl: './education-form.component.scss',
})
export class EducationFormComponent implements OnInit {
	@Output() public form = new EventEmitter();

	@Output() public confirm = new EventEmitter();

	public educationForm!: FormGroup;

	public constructor(private _fb: FormBuilder) {}

	public ngOnInit() {
		this.educationForm = this._fb.group({
			educationArr: this._fb.array([]),
		});
	}

	get education() {
		return this.educationForm.controls['educationArr'] as FormArray;
	}

	public addEducation() {
		const newEducationForm = this._fb.group({
			universityName: ['', Validators.required],
			city: ['', Validators.required],
			startDateMonth: ['', Validators.required],
			startDateYear: ['', Validators.required],
			endDateMonth: ['', Validators.required],
			endDateYear: ['', Validators.required],
			description: [],
		});

		this.education.push(newEducationForm);
	}

	public deleteEducation(educationIndex: number) {
		this.education.removeAt(educationIndex);
	}

	public onEducationFormSubmit() {
		this.educationForm.markAsDirty();

		this.form.emit(this.educationForm);
	}
}
