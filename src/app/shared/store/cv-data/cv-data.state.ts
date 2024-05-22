import { IPersonalData } from '../../models/personal-data.model';
import { IExperience } from '../../models/experience.model';
import { IEducation } from '../../models/education.model';

export interface ICvDataState {
	theme: string;
	personalData: IPersonalData;
	experiences: IExperience[];
	educations: IEducation[];
	resetForms: boolean;
}

export const initialCvDataState: ICvDataState = {
	theme: '',
	personalData: {} as IPersonalData,
	experiences: [],
	educations: [],
	resetForms: false,
};
