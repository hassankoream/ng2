import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  showOverlay: boolean = false;
  selectedImage: string = '';

  showPic(imageSrc: string): void {
    this.selectedImage = imageSrc;
    this.showOverlay = true;
  }

  closeOverlay(): void {
    this.showOverlay = false;
  }
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
