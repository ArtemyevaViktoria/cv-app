import { Component } from '@angular/core';

@Component({
	selector: 'cv-footer',
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	public currentYear: number = new Date().getFullYear();
}
