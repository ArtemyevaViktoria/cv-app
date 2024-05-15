import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
	declarations: [],
	imports: [],
	exports: [],
})
export class SharedModule {
	public static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
		};
	}
}
