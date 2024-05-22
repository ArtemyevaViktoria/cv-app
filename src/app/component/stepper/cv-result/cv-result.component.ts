import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { StoreSelectFacade } from '../../../shared/facades/store-select.facade';
import { UnSubscriber } from '../../../shared/utils/unsubscriber';
import { takeUntil } from 'rxjs';
import { IPersonalData } from '../../../shared/models/personal-data.model';
import { IExperience } from '../../../shared/models/experience.model';
import { IEducation } from '../../../shared/models/education.model';
import { PdfService } from '../../../shared/services/pdf.service';

@Component({
	selector: 'cv-result',
	templateUrl: './cv-result.component.html',
	styleUrl: './cv-result.component.scss',
})
export class CvResultComponent extends UnSubscriber implements OnInit {
	@Output()
	public resetData = new EventEmitter();

	@ViewChild('contentToConvert')
	public contentToConvert!: ElementRef;

	public personalData!: IPersonalData;

	public experiencesData!: IExperience[];

	public educationsData!: IEducation[];

	public constructor(
		private _storeSelect: StoreSelectFacade,
		private _pdfService: PdfService,
	) {
		super();
	}

	public ngOnInit() {
		this._storeSelect
			.personalData()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => (this.personalData = vl));

		this._storeSelect
			.experiences()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => (this.experiencesData = vl));

		this._storeSelect
			.educations()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => (this.educationsData = vl));
	}

	public exportToPdf() {
		const elementId = 'contentToConvert';
		const fileName = `cv_${this.personalData.firstName}_${this.personalData.lastName}`;
		this._pdfService.exportToPdf(elementId, fileName);
	}
}
