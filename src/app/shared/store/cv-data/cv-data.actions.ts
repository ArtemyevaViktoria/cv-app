import { createAction, props } from '@ngrx/store';
import { IPersonalData } from '../../models/personal-data.model';
import { IExperience } from '../../models/experience.model';
import { IEducation } from '../../models/education.model';

const GET_FROM_LOCAL_STORAGE = '[CV data] Get from Local Storage';

const ADD_PERSONAL_DATA_TO_LOCAL_STORAGE = '[CV data] Add personal data to Local Storage';
const ADD_EXPERIENCES_TO_LOCAL_STORAGE = '[CV data] Add experiences to Local Storage';
const ADD_EDUCATIONS_TO_LOCAL_STORAGE = '[CV data] Add educations to Local Storage';

const REMOVE_FROM_LOCAL_STORAGE = '[CV data] Remove from Local Storage';

export const getFromLocalStorage = createAction(GET_FROM_LOCAL_STORAGE, props<{ key: string }>());

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

export const removeFromLocalStorage = createAction(
	REMOVE_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);
