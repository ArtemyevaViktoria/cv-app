import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreDispatchFacade } from '../../../shared/facades/store-dispatch.facade';
import { StoreSelectFacade } from '../../../shared/facades/store-select.facade';
import { UnSubscriber } from '../../../shared/utils/unsubscriber';
import { IPersonalData } from '../../../shared/models/personal-data.model';
import { takeUntil } from 'rxjs';

@Component({
	selector: 'cv-personal-form',
	templateUrl: './personal-form.component.html',
	styleUrl: './personal-form.component.scss',
})
export class PersonalFormComponent extends UnSubscriber implements OnInit {
	@Output() public form = new EventEmitter();

	public personalForm!: FormGroup;

	public personalDataLocalStorage!: IPersonalData;

	public constructor(
		private _fb: FormBuilder,
		private _storeDispatch: StoreDispatchFacade,
		private _storeSelect: StoreSelectFacade,
	) {
		super();
	}

	public ngOnInit() {
		this.initPersonalForm();

		this._storeSelect
			.personalData()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => (this.personalDataLocalStorage = vl));

		if (Object.keys(this.personalDataLocalStorage).length > 0) {
			this.setPersonalData(this.personalDataLocalStorage);
		}
	}

	public initPersonalForm() {
		this.personalForm = this._fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			title: ['', Validators.required],
			address: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
		});
	}

	public setPersonalData(personalData: IPersonalData) {
		this.personalForm.setValue({
			firstName: personalData.firstName,
			lastName: personalData.lastName,
			title: personalData.title,
			address: personalData.address,
			email: personalData.email,
			phone: personalData.phone,
		});
	}

	public submitForm() {
		this.personalForm.markAsDirty();

		this.form.emit(this.personalForm);

		this._storeDispatch.addPersonalDataToLocalStorage(this.personalForm.value);
	}
}
