import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
	providedIn: 'root',
})
export class StoreSelectFacade {
	public constructor(private store: Store) {}
}
