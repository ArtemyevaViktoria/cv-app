import { createReducer, on } from '@ngrx/store';
import { CvDataActions } from './index';
import { ICvDataState, initialCvDataState } from './cv-data.state';

export const cvDataReducer = createReducer(
	initialCvDataState,

	on(CvDataActions.getPersonalDataSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		personalData: payload,
	})),
	on(CvDataActions.getExperiencesSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		experiences: payload,
	})),

	on(CvDataActions.addPersonalDataToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		personalData: payload,
	})),
	on(CvDataActions.addExperiencesToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		experiences: payload,
	})),
);
