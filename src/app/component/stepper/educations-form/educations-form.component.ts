import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CMonths } from '../../../shared/constants/months';

@Component({
	selector: 'cv-educations-form',
	templateUrl: './educations-form.component.html',
	styleUrl: './educations-form.component.scss',
})
export class EducationsFormComponent implements OnInit {
	@Output() public form = new EventEmitter();

	@Output() public confirm = new EventEmitter();

	public educationsForm!: FormGroup;

	public months: string[] = CMonths;

	public years!: number[];

	public currentYear: number = new Date().getFullYear();

	public constructor(private _fb: FormBuilder) {}

	public ngOnInit() {
		this.educationsForm = this._fb.group({
			educationArr: this._fb.array([]),
		});

		this.getYears();
	}

	public getYears() {
		const startingYear = this.currentYear - 34;

		this.years = [...Array(35).keys()].map((i) => i + startingYear);
	}

	public get education() {
		return this.educationsForm.controls['educationArr'] as FormArray;
	}

	public addEducation() {
		const newEducationForm = this._fb.group({
			universityName: ['', Validators.required],
			city: ['', Validators.required],
			degree: ['', Validators.required],
			subject: ['', Validators.required],
			startDateMonth: [this.months[8], Validators.required],
			startDateYear: [2016, Validators.required],
			endDateMonth: [this.months[5], Validators.required],
			endDateYear: [2020, Validators.required],
			description: [],
		});

		this.education.push(newEducationForm);
	}

	public deleteEducation(educationIndex: number) {
		this.education.removeAt(educationIndex);
	}

	public onEducationFormSubmit() {
		this.educationsForm.markAsDirty();

		this.form.emit(this.educationsForm);
	}
}
