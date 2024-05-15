import { ModuleWithProviders, NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NbIconModule, NbSelectModule } from '@nebular/theme';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [FooterComponent, HeaderComponent],
	imports: [NbIconModule, NbSelectModule, ReactiveFormsModule],
	exports: [FooterComponent, HeaderComponent],
})
export class SharedModule {
	public static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
		};
	}
}
