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
		experiences: payload.experiencesArr,
	})),
	on(CvDataActions.getEducationsSuccess, (state: ICvDataState, { payload }) => ({
		...state,
		educations: payload.educationArr,
	})),

	on(CvDataActions.addPersonalDataToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		personalData: payload,
	})),
	on(CvDataActions.addExperiencesToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		experiences: payload,
	})),
	on(CvDataActions.addEducationsToLocalStorage, (state: ICvDataState, { payload }) => ({
		...state,
		educations: payload,
	})),
);
