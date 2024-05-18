import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CvDataActions } from '../store/cv-data';
import { IPersonalData } from '../models/personal-data.model';
import { IExperience } from '../models/experience.model';
import { IEducation } from '../models/education.model';

@Injectable({
	providedIn: 'root',
})
export class StoreDispatchFacade {
	public constructor(private store: Store) {}

	public getPersonalDataFromLocalStorage(): void {
		return this.store.dispatch(
			CvDataActions.getPersonalDataFromLocalStorage({ key: 'personalData' }),
		);
	}

	public getExperiencesFromLocalStorage(): void {
		return this.store.dispatch(
			CvDataActions.getExperiencesFromLocalStorage({ key: 'experiences' }),
		);
	}

	public getEducationsFromLocalStorage(): void {
		return this.store.dispatch(CvDataActions.getEducationsFromLocalStorage({ key: 'educations' }));
	}

	public addPersonalDataToLocalStorage(personalData: IPersonalData): void {
		return this.store.dispatch(
			CvDataActions.addPersonalDataToLocalStorage({ payload: personalData }),
		);
	}

	public addExperiencesToLocalStorage(experiences: IExperience[]): void {
		return this.store.dispatch(
			CvDataActions.addExperiencesToLocalStorage({ payload: experiences }),
		);
	}

	public addEducationsToLocalStorage(educations: IEducation[]): void {
		return this.store.dispatch(CvDataActions.addEducationsToLocalStorage({ payload: educations }));
	}
}
