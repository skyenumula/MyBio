import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to use *ngIf and other Angular directives
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
})
export class ExpComponent {
  // Default active roadmap
  activeRoadmap: string = 'experience'; // Show 'education' roadmap by default

  // Method to change the active roadmap
  showRoadmap(type: string): void {
    this.activeRoadmap = type;
    console.log(`Active Roadmap: ${this.activeRoadmap}`); // Debugging
  }
}
