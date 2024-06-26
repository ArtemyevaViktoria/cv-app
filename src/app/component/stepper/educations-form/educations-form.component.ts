import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CMonths } from '../../../shared/constants/months';
import { StoreDispatchFacade } from '../../../shared/facades/store-dispatch.facade';
import { UnSubscriber } from '../../../shared/utils/unsubscriber';
import { StoreSelectFacade } from '../../../shared/facades/store-select.facade';
import { takeUntil } from 'rxjs';
import { IEducation } from '../../../shared/models/education.model';

@Component({
	selector: 'cv-educations-form',
	templateUrl: './educations-form.component.html',
	styleUrl: './educations-form.component.scss',
})
export class EducationsFormComponent extends UnSubscriber implements OnInit {
	@Output()
	public form = new EventEmitter();

	@Output()
	public confirm = new EventEmitter();

	public educationsForm!: FormGroup;

	public educationLocalStorage!: IEducation[];

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
		this.initEducationsForm();

		this.getYears();

		this._storeSelect
			.educations()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => (this.educationLocalStorage = vl));

		this.createEducations(this.educationLocalStorage);

		this._storeSelect
			.resetForms()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => this.reset(vl));
	}

	public initEducationsForm() {
		this.educationsForm = this._fb.group({
			educationArr: this._fb.array([]),
		});
	}

	public getYears() {
		const startingYear = this.currentYear - 34;

		this.years = [...Array(35).keys()].map((i) => i + startingYear);
	}

	public get education() {
		return this.educationsForm.controls['educationArr'] as FormArray;
	}

	public createEducations(educations: IEducation[]) {
		for (let i = 0; i < educations.length; i++) {
			this.addEducation();
		}

		this.setEducationData(educations);
	}

	public setEducationData(educations: IEducation[]) {
		const educationsFromLocalStorage: IEducation[] = [];

		for (let i = 0; i < educations.length; i++) {
			const newEducation: IEducation = {
				universityName: educations[i].universityName,
				city: educations[i].city,
				degree: educations[i].degree,
				subject: educations[i].subject,
				startDateMonth: educations[i].startDateMonth,
				startDateYear: educations[i].startDateYear,
				endDateMonth: educations[i].endDateMonth,
				endDateYear: educations[i].endDateYear,
				description: educations[i].description ?? '',
			};

			educationsFromLocalStorage.push(newEducation);
		}

		this.educationsForm.controls['educationArr'].setValue(educationsFromLocalStorage);
	}

	public addEducation() {
		const newEducationForm = this._fb.group({
			universityName: ['', Validators.required],
			city: ['', Validators.required],
			degree: ['', Validators.required],
			subject: ['', Validators.required],
			startDateMonth: [this.months[8]],
			startDateYear: [2016],
			endDateMonth: [this.months[5]],
			endDateYear: [2020],
			description: [''],
		});

		this.education.push(newEducationForm);
	}

	public deleteEducation(educationIndex: number) {
		this.education.removeAt(educationIndex);
	}

	public submitForm() {
		this.educationsForm.markAsDirty();

		this.form.emit(this.educationsForm);

		if (this.educationsForm.controls['educationArr'].value.length > 0) {
			this._storeDispatch.addEducationsToLocalStorage(
				this.educationsForm.controls['educationArr'].value,
			);
		} else {
			this._storeDispatch.deleteEducationsFromLocalStorage();
		}
	}

	public reset(reset: boolean) {
		if (reset) {
			this.initEducationsForm();
			this.form.emit(this.educationsForm);
		}
	}
}
