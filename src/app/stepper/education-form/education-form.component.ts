import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CMonths } from '../../shared/constants/months';

@Component({
	selector: 'cv-education-form',
	templateUrl: './education-form.component.html',
	styleUrl: './education-form.component.scss',
})
export class EducationFormComponent implements OnInit {
	@Output() public form = new EventEmitter();

	@Output() public confirm = new EventEmitter();

	public educationForm!: FormGroup;

	public months: string[] = CMonths;

	public years!: number[];

	public currentYear: number = new Date().getFullYear();

	public constructor(private _fb: FormBuilder) {}

	public ngOnInit() {
		this.educationForm = this._fb.group({
			educationArr: this._fb.array([]),
		});

		this.getYears();
	}

	public getYears() {
		const startingYear = this.currentYear - 34;

		this.years = [...Array(35).keys()].map((i) => i + startingYear);
	}

	get education() {
		return this.educationForm.controls['educationArr'] as FormArray;
	}

	public addEducation() {
		const newEducationForm = this._fb.group({
			universityName: ['', Validators.required],
			city: ['', Validators.required],
			startDateMonth: [this.months[0], Validators.required],
			startDateYear: [2023, Validators.required],
			endDateMonth: [this.months[3], Validators.required],
			endDateYear: [2024, Validators.required],
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
