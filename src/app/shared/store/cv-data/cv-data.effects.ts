import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, tap } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { CvDataActions } from './index';

@Injectable()
export class CvDataEffects {
	public constructor(
		private actions: Actions,
		private _localStorageService: LocalStorageService,
	) {}

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
}
