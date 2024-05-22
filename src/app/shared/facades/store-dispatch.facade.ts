import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CvDataActions } from '../store/cv-data';
import { IPersonalData } from '../models/personal-data.model';
import { IExperience } from '../models/experience.model';
import { IEducation } from '../models/education.model';
import { IRootState } from '../store/root.state';

@Injectable({
	providedIn: 'root',
})
export class StoreDispatchFacade {
	public constructor(private store: Store<IRootState>) {}

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

	public getThemeFromLocalStorage(): void {
		return this.store.dispatch(CvDataActions.getThemeFromLocalStorage({ key: 'theme' }));
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

	public addThemeToLocalStorage(theme: string): void {
		return this.store.dispatch(CvDataActions.addThemeToLocalStorage({ payload: theme }));
	}

	public deleteExperiencesFromLocalStorage(): void {
		return this.store.dispatch(
			CvDataActions.deleteExperiencesFromLocalStorage({ key: 'experiences' }),
		);
	}

	public deleteEducationsFromLocalStorage(): void {
		return this.store.dispatch(
			CvDataActions.deleteEducationsFromLocalStorage({ key: 'educations' }),
		);
	}

	public resetForms(): void {
		return this.store.dispatch(CvDataActions.resetForms());
	}
}
