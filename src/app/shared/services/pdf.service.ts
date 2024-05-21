import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

@Injectable({
	providedIn: 'root',
})
export class PdfService {
	public async exportToPdf(elementId: string, fileName: string) {
		const doc = new jspdf.jsPDF();
		const element = document.getElementById(elementId);

		if (!element) {
			console.error('Element not found!');
			return;
		}

		const options = {
			background: 'white',
			scale: 15,
		};

		const canvas = await html2canvas(element, options);
		const imgData = canvas.toDataURL('image/png');
		const imgWidth = 210; // mm (A4 width)
		const imgHeight = (canvas.height * imgWidth) / canvas.width;

		doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
		doc.save(fileName + '.pdf');
	}
}
