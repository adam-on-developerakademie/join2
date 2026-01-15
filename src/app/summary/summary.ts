import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {
  stats = {
    todo: 1,
    done: 1,
    urgent: 1,
    deadline: 'December 31, 2025',
    board: 5,
    inProgress: 2,
    feedback: 2,
    userName: 'Sofia Müller',
  };

  getGreeting(): string {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  }
}
