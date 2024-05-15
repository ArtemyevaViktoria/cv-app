import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
	selector: 'cv-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	public selected = 'cosmic';

	public constructor(private _themeService: NbThemeService) {}

	public changeTheme(theme: string) {
		this._themeService.changeTheme(theme);
	}
}
