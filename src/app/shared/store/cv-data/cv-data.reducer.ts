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
		experiences: payload.experiencesArr,
		resetForms: false,
	})),
	on(CvDataActions.getEducationsSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		educations: payload.educationArr,
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

	on(CvDataActions.resetForms, (state: ICvDataState) => ({
		...state,
		resetForms: true,
	})),
);
