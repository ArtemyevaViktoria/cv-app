import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { UnSubscriber } from '../../utils/unsubscriber';
import { takeUntil } from 'rxjs';
import { StoreSelectFacade } from '../../facades/store-select.facade';
import { StoreDispatchFacade } from '../../facades/store-dispatch.facade';

@Component({
	selector: 'cv-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent extends UnSubscriber implements OnInit {
	public selected!: string;

	public constructor(
		private _themeService: NbThemeService,
		private _storeSelect: StoreSelectFacade,
		private _storeDispatch: StoreDispatchFacade,
	) {
		super();
	}

	public ngOnInit() {
		this._storeSelect
			.theme()
			.pipe(takeUntil(this.unsubscribe$$))
			.subscribe((vl) => {
				this.selected = vl;
				this._themeService.changeTheme(vl);
			});
	}

	public addThemeToLocalStorage(theme: string) {
		this._storeDispatch.addThemeToLocalStorage(theme);
	}
}
