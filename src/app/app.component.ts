import { Component, OnInit } from '@angular/core';
import { StoreDispatchFacade } from './shared/facades/store-dispatch.facade';

@Component({
	selector: 'cv-app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	public constructor(private _storeDispatch: StoreDispatchFacade) {}

	public ngOnInit() {
		this._storeDispatch.getThemeFromLocalStorage();
		this._storeDispatch.getPersonalDataFromLocalStorage();
		this._storeDispatch.getExperiencesFromLocalStorage();
		this._storeDispatch.getEducationsFromLocalStorage();
	}
}
