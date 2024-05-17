import { createAction, props } from '@ngrx/store';
import { IPersonalData } from '../../models/personal-data.model';
import { IExperience } from '../../models/experience.model';

const GET_PERSONAL_DATA_FROM_LOCAL_STORAGE = '[CV data] Get personal data from Local Storage';
const GET_PERSONAL_DATA_SUCCESS = '[CV data] Get personal data success';

const GET_EXPERIENCES_FROM_LOCAL_STORAGE = '[CV data] Get experiences from Local Storage';
const GET_EXPERIENCES_SUCCESS = '[CV data] Get experiences success';

const ADD_PERSONAL_DATA_TO_LOCAL_STORAGE = '[CV data] Add personal data to Local Storage';
const ADD_EXPERIENCES_TO_LOCAL_STORAGE = '[CV data] Add experiences to Local Storage';

export const getPersonalDataFromLocalStorage = createAction(
	GET_PERSONAL_DATA_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const getPersonalDataSuccess = createAction(
	GET_PERSONAL_DATA_SUCCESS,
	props<{ payload: IPersonalData }>(),
);

export const getExperiencesFromLocalStorage = createAction(
	GET_EXPERIENCES_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const getExperiencesSuccess = createAction(
	GET_EXPERIENCES_SUCCESS,
	props<{ payload: IExperience[] }>(),
);

export const addPersonalDataToLocalStorage = createAction(
	ADD_PERSONAL_DATA_TO_LOCAL_STORAGE,
	props<{ payload: IPersonalData }>(),
);

export const addExperiencesToLocalStorage = createAction(
	ADD_EXPERIENCES_TO_LOCAL_STORAGE,
	props<{ payload: IExperience[] }>(),
);
