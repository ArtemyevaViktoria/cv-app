import { createAction, props } from '@ngrx/store';
import { IPersonalData } from '../../models/personal-data.model';
import { IExperience } from '../../models/experience.model';
import { IEducation } from '../../models/education.model';
import { ILocalStorageExperiences } from '../../models/local-storage-experiences.model';
import { ILocalStorageEducation } from '../../models/local-storage-education.model';

const GET_PERSONAL_DATA_FROM_LOCAL_STORAGE = '[CV data] Get personal data from Local Storage';
const GET_PERSONAL_DATA_SUCCESS = '[CV data] Get personal data success';

const GET_EXPERIENCES_FROM_LOCAL_STORAGE = '[CV data] Get experiences from Local Storage';
const GET_EXPERIENCES_SUCCESS = '[CV data] Get experiences success';

const GET_EDUCATIONS_FROM_LOCAL_STORAGE = '[CV data] Get educations from Local Storage';
const GET_EDUCATIONS_SUCCESS = '[CV data] Get educations success';

const ADD_PERSONAL_DATA_TO_LOCAL_STORAGE = '[CV data] Add personal data to Local Storage';
const ADD_EXPERIENCES_TO_LOCAL_STORAGE = '[CV data] Add experiences to Local Storage';
const ADD_EDUCATIONS_TO_LOCAL_STORAGE = '[CV data] Add educations to Local Storage';

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
	props<{ payload: ILocalStorageExperiences }>(),
);

export const getEducationsFromLocalStorage = createAction(
	GET_EDUCATIONS_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const getEducationsSuccess = createAction(
	GET_EDUCATIONS_SUCCESS,
	props<{ payload: ILocalStorageEducation }>(),
);

export const addPersonalDataToLocalStorage = createAction(
	ADD_PERSONAL_DATA_TO_LOCAL_STORAGE,
	props<{ payload: IPersonalData }>(),
);

export const addExperiencesToLocalStorage = createAction(
	ADD_EXPERIENCES_TO_LOCAL_STORAGE,
	props<{ payload: IExperience[] }>(),
);

export const addEducationsToLocalStorage = createAction(
	ADD_EDUCATIONS_TO_LOCAL_STORAGE,
	props<{ payload: IEducation[] }>(),
);
