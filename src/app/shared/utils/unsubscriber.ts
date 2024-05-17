import { OnDestroy, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UnSubscriber implements OnDestroy {
	protected unsubscribe$$ = new Subject();

	public ngOnDestroy(): void {
		this.unsubscribe$$.next(true);
		this.unsubscribe$$.complete();
	}
}
