import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CMonths } from '../../../shared/constants/months';
import { StoreDispatchFacade } from '../../../shared/facades/store-dispatch.facade';

@Component({
	selector: 'cv-experiences-form',
	templateUrl: './experiences-form.component.html',
	styleUrl: './experiences-form.component.scss',
})
export class ExperiencesFormComponent implements OnInit {
	@Output() public form = new EventEmitter();

	public experiencesForm!: FormGroup;

	public months: string[] = CMonths;

	public years!: number[];

	public currentYear: number = new Date().getFullYear();

	public constructor(
		private _fb: FormBuilder,
		private _storeDispatch: StoreDispatchFacade,
	) {}

	public ngOnInit() {
		this.experiencesForm = this._fb.group({
			experiencesArr: this._fb.array([]),
		});

		this.getYears();
	}

	public getYears() {
		const startingYear = this.currentYear - 24;

		this.years = [...Array(25).keys()].map((i) => i + startingYear);
	}

	public get experiences() {
		return this.experiencesForm.controls['experiencesArr'] as FormArray;
	}

	public addExperience() {
		const newExperienceForm = this._fb.group({
			position: ['', Validators.required],
			company: ['', Validators.required],
			city: ['', Validators.required],
			startDateMonth: [this.months[0], Validators.required],
			startDateYear: [2023, Validators.required],
			endDateMonth: [this.months[3], Validators.required],
			endDateYear: [2024, Validators.required],
			description: [],
		});

		this.experiences.push(newExperienceForm);
	}

	public deleteExperience(experienceIndex: number) {
		this.experiences.removeAt(experienceIndex);
	}

	public submitForm() {
		this.experiencesForm.markAsDirty();

		this.form.emit(this.experiencesForm);

		this._storeDispatch.addExperiencesToLocalStorage(this.experiencesForm.value);
	}
}
