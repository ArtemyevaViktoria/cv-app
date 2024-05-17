import { createSelector } from '@ngrx/store';
import { IRootState } from '../root.state';
import { ICvDataState } from './cv-data.state';

const cvDataState = (state: IRootState) => state.cvDataState;
export const selectPersonalData = createSelector(
	cvDataState,
	(state: ICvDataState) => state.personalData,
);
export const selectExperiences = createSelector(
	cvDataState,
	(state: ICvDataState) => state.experiences,
);
