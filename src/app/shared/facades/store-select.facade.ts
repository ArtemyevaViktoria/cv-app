import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CvDataSelectors } from '../store/cv-data';
import { IPersonalData } from '../models/personal-data.model';
import { IRootState } from '../store/root.state';
import { IExperience } from '../models/experience.model';
import { IEducation } from '../models/education.model';

@Injectable({
	providedIn: 'root',
})
export class StoreSelectFacade {
	public constructor(private store: Store<IRootState>) {}

	public personalData(): Observable<IPersonalData> {
		return this.store.select(CvDataSelectors.selectPersonalData);
	}

	public experiences(): Observable<IExperience[]> {
		return this.store.select(CvDataSelectors.selectExperiences);
	}

	public educations(): Observable<IEducation[]> {
		return this.store.select(CvDataSelectors.selectEducations);
	}

	public resetForms(): Observable<boolean> {
		return this.store.select(CvDataSelectors.selectResetForms);
	}
}
