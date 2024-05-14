import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'cv-experiences-form',
	templateUrl: './experiences-form.component.html',
	styleUrl: './experiences-form.component.scss',
})
export class ExperiencesFormComponent implements OnInit {
	@Output() public form = new EventEmitter();

	public experiencesForm!: FormGroup;

	public constructor(private _fb: FormBuilder) {}

	public ngOnInit() {
		this.experiencesForm = this._fb.group({
			experiencesArr: this._fb.array([]),
		});
	}

	get experiences() {
		return this.experiencesForm.controls['experiencesArr'] as FormArray;
	}

	public addExperience() {
		const newExperienceForm = this._fb.group({
			position: ['', Validators.required],
			company: [],
			city: [],
			startDateMonth: [],
			startDateYear: [],
			endDateMonth: [],
			endDateYear: [],
			description: [],
		});

		this.experiences.push(newExperienceForm);
	}

	public deleteExperience(experienceIndex: number) {
		this.experiences.removeAt(experienceIndex);
	}

	public onExperiencesFormSubmit() {
		this.experiencesForm.markAsDirty();

		this.form.emit(this.experiencesForm);
	}
}
