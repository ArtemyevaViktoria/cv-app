import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CvDataSelectors } from '../store/cv-data';
import { IPersonalData } from '../models/personal-data.model';
import { IRootState } from '../store/root.state';

@Injectable({
	providedIn: 'root',
})
export class StoreSelectFacade {
	public constructor(private store: Store<IRootState>) {}

	public personalData(): Observable<IPersonalData> {
		return this.store.select(CvDataSelectors.selectPersonalData);
	}
}
