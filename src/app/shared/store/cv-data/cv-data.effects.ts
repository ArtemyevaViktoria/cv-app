import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, Observable, tap } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { CvDataActions } from './index';
import { IPersonalData } from '../../models/personal-data.model';
import { IExperience } from '../../models/experience.model';
import { IEducation } from '../../models/education.model';

@Injectable()
export class CvDataEffects {
	public constructor(
		private actions: Actions,
		private _localStorageService: LocalStorageService,
	) {}

	public getPersonalDataFromLocalStorage$: Observable<Action> = createEffect(() => {
		return this.actions.pipe(
			ofType(CvDataActions.getPersonalDataFromLocalStorage),
			filter((action) => this._localStorageService.getItem<IPersonalData>(action.key) !== null),
			map((action): Action => {
				const localStoragePersonalData = this._localStorageService.getItem<IPersonalData>(
					action.key,
				);
				return CvDataActions.getPersonalDataSuccess({ payload: localStoragePersonalData });
			}),
		);
	});

	public getExperiencesFromLocalStorage$: Observable<Action> = createEffect(() => {
		return this.actions.pipe(
			ofType(CvDataActions.getExperiencesFromLocalStorage),
			filter((action) => this._localStorageService.getItem<IExperience[]>(action.key) !== null),
			map((action): Action => {
				const localStorageExperiences = this._localStorageService.getItem<IExperience[]>(
					action.key,
				);
				return CvDataActions.getExperiencesSuccess({ payload: localStorageExperiences });
			}),
		);
	});

	public getEducationsFromLocalStorage$: Observable<Action> = createEffect(() => {
		return this.actions.pipe(
			ofType(CvDataActions.getEducationsFromLocalStorage),
			filter((action) => this._localStorageService.getItem<IEducation[]>(action.key) !== null),
			map((action): Action => {
				const localStorageEducation = this._localStorageService.getItem<IEducation[]>(action.key);
				return CvDataActions.getEducationsSuccess({ payload: localStorageEducation });
			}),
		);
	});

	public addPersonalDataToLocalStorage$: Observable<Action> = createEffect(
		() => {
			return this.actions.pipe(
				ofType(CvDataActions.addPersonalDataToLocalStorage),
				tap((action) => {
					return this._localStorageService.setItem('personalData', action.payload);
				}),
			);
		},
		{ dispatch: false },
	);

	public addExperiencesToLocalStorage$: Observable<Action> = createEffect(
		() => {
			return this.actions.pipe(
				ofType(CvDataActions.addExperiencesToLocalStorage),
				tap((action) => {
					return this._localStorageService.setItem('experiences', action.payload);
				}),
			);
		},
		{ dispatch: false },
	);

	public addEducationsToLocalStorage$: Observable<Action> = createEffect(
		() => {
			return this.actions.pipe(
				ofType(CvDataActions.addEducationsToLocalStorage),
				tap((action) => {
					return this._localStorageService.setItem('educations', action.payload);
				}),
			);
		},
		{ dispatch: false },
	);

	public deleteFromLocalStorage$: Observable<Action> = createEffect(
		() => {
			return this.actions.pipe(
				ofType(
					CvDataActions.deleteExperiencesFromLocalStorage,
					CvDataActions.deleteEducationsFromLocalStorage,
				),
				tap((action) => {
					return this._localStorageService.removeItem(action.key);
				}),
			);
		},
		{ dispatch: false },
	);
}
