import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CMonths } from '../../../shared/constants/months';
import { StoreDispatchFacade } from '../../../shared/facades/store-dispatch.facade';
import { takeUntil } from 'rxjs';
import { StoreSelectFacade } from '../../../shared/facades/store-select.facade';
import { UnSubscriber } from '../../../shared/utils/unsubscriber';
import { IExperience } from '../../../shared/models/experience.model';

@Component({
	selector: 'cv-experiences-form',
	templateUrl: './experiences-form.component.html',
	styleUrl: './experiences-form.component.scss',
})
export class ExperiencesFormComponent extends UnSubscriber implements OnInit {
	@Output()
	public form = new EventEmitter();

	public experiencesForm!: FormGroup;

	public experiencesLocalStorage!: IExperience[];

	public months: string[] = CMonths;

	public years!: number[];

	public currentYear: number = new Date().getFullYear();

	public constructor(
		private _fb: FormBuilder,
		private _storeDispatch: StoreDispatchFacade,
		private _storeSelect: StoreSelectFacade,
	) {
		super();
	}

	public ngOnInit() {
		this.initExperiencesForm();

		this.getYears();

		this._storeSelect
			.experiences()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => (this.experiencesLocalStorage = vl));

		this.createExperiences(this.experiencesLocalStorage);

		this._storeSelect
			.resetForms()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => this.reset(vl));
	}

	public initExperiencesForm() {
		this.experiencesForm = this._fb.group({
			experiencesArr: this._fb.array([]),
		});
	}

	public getYears() {
		const startingYear = this.currentYear - 24;

		this.years = [...Array(25).keys()].map((i) => i + startingYear);
	}

	public get experiences() {
		return this.experiencesForm.controls['experiencesArr'] as FormArray;
	}

	public createExperiences(experiences: IExperience[]) {
		for (let i = 0; i < experiences.length; i++) {
			this.addExperience();
		}

		this.setExperienceData(experiences);
	}

	public setExperienceData(experiences: IExperience[]) {
		const experiencesFromLocalStorage: IExperience[] = [];

		for (let i = 0; i < experiences.length; i++) {
			const newExp: IExperience = {
				position: experiences[i].position,
				company: experiences[i].company,
				city: experiences[i].city,
				startDateMonth: experiences[i].startDateMonth,
				startDateYear: experiences[i].startDateYear,
				endDateMonth: experiences[i].endDateMonth,
				endDateYear: experiences[i].endDateYear,
				description: experiences[i].description ?? '',
			};

			experiencesFromLocalStorage.push(newExp);
		}

		this.experiencesForm.controls['experiencesArr'].setValue(experiencesFromLocalStorage);
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
			description: [''],
		});

		this.experiences.push(newExperienceForm);
	}

	public deleteExperience(experienceIndex: number) {
		this.experiences.removeAt(experienceIndex);
	}

	public submitForm() {
		this.experiencesForm.markAsDirty();

		this.form.emit(this.experiencesForm);

		if (this.experiencesForm.controls['experiencesArr'].value.length > 0) {
			this._storeDispatch.addExperiencesToLocalStorage(
				this.experiencesForm.controls['experiencesArr'].value,
			);
		} else {
			this._storeDispatch.deleteExperiencesFromLocalStorage();
		}
	}

	public reset(reset: boolean) {
		if (reset) {
			this.initExperiencesForm();
			this.form.emit(this.experiencesForm);
		}
	}
}
