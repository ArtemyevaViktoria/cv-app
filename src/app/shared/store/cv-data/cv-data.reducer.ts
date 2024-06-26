import { createReducer, on } from '@ngrx/store';
import { CvDataActions } from './index';
import { ICvDataState, initialCvDataState } from './cv-data.state';

export const cvDataReducer = createReducer(
	initialCvDataState,

	on(CvDataActions.getPersonalDataSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		personalData: payload,
		resetForms: false,
	})),
	on(CvDataActions.getExperiencesSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		experiences: payload ?? [],
		resetForms: false,
	})),
	on(CvDataActions.getEducationsSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		educations: payload ?? [],
		resetForms: false,
	})),
	on(CvDataActions.getThemeSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		theme: payload,
		resetForms: false,
	})),

	on(CvDataActions.addPersonalDataToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		personalData: payload,
		resetForms: false,
	})),
	on(CvDataActions.addExperiencesToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		experiences: payload,
		resetForms: false,
	})),
	on(CvDataActions.addEducationsToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		educations: payload,
		resetForms: false,
	})),
	on(CvDataActions.addThemeToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		theme: payload,
		resetForms: false,
	})),

	on(CvDataActions.deleteExperiencesFromLocalStorage, (state: ICvDataState) => ({
		...state,
		resetForms: false,
		experiences: [],
	})),

	on(CvDataActions.deleteEducationsFromLocalStorage, (state: ICvDataState) => ({
		...state,
		resetForms: false,
		educations: [],
	})),

	on(CvDataActions.resetForms, (state: ICvDataState) => ({
		...state,
		resetForms: true,
	})),
);
