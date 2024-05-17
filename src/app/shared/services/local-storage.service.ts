import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	public setItem<T>(key: string, value: T): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	public getItem(key: string) {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}

	public removeItem(key: string): void {
		localStorage.removeItem(key);
	}
}
