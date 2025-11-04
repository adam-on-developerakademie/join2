import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-created',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './created.html',
  styleUrls: ['./created.scss'],
})
export class Created {
  @Input() show = false; // Sichtbarkeit durch [show]="toastOpen"
}
