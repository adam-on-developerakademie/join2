import { Component } from '@angular/core';
import { BoardHeader } from './board-header/board-header';

@Component({
  selector: 'app-board',
  imports: [BoardHeader],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {

}
