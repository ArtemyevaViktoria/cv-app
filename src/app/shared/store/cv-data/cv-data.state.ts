import { IPersonalData } from '../../models/personal-data.model';
import { IExperience } from '../../models/experience.model';

export interface ICvDataState {
	personalData: IPersonalData;
	experiences: IExperience[];
}

export const initialCvDataState: ICvDataState = {
	personalData: {} as IPersonalData,
	experiences: [],
};
