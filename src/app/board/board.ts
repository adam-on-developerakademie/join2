import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardHeader } from './board-header/board-header';
import { FormsModule } from '@angular/forms';
import { FbTaskService } from '../services/fb-task-service';
import { ITask } from '../interfaces/i-task';
import { BoardCard } from './board-card/board-card';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, } from '@angular/cdk/drag-drop';
import { T } from '@angular/cdk/keycodes';



@Component({
  selector: 'app-board',
  imports: [BoardHeader, FormsModule, BoardCard, CdkDropList, CdkDrag, CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {

  task: ITask = {} as ITask;
  currentTask: ITask = {} as ITask;
  defaultPriority: string = 'low';
  priorityOptions: string[] = ['low', 'medium', 'high'];
  columnIndex: number = 0;
  TaskCollumnOne = {};
  TaskCollumnTwo = {};
  TaskCollumnThree = {};
  TaskCollumnFour = {};
  TaskCollumnFive: number[] = [];
  TaskCollumnSix: number[] = [];
  TaskCollumnSeven: number[] = [];


  constructor(private fbTaskService: FbTaskService) {

    this.task = this.fbTaskService.newTask;
    this.columnIndex = 0;
    this.currentTask = {} as ITask;
    console.log(this.currentTask, this.columnIndex);
    this.fbTaskService.currentTask = this.currentTask

    this.TaskCollumnOne = this.fbTaskService.tasksArray.filter(task => task.status === 'to-do').sort((a, b) => a.positionIndex - b.positionIndex)
    this.TaskCollumnTwo = this.fbTaskService.tasksArray.filter(task => task.status === 'in-progress').sort((a, b) => a.positionIndex - b.positionIndex)
    this.TaskCollumnThree = this.fbTaskService.tasksArray.filter(task => task.status === 'await-feedback').sort((a, b) => a.positionIndex - b.positionIndex)
    this.TaskCollumnFour = this.fbTaskService.tasksArray.filter(task => task.status === 'done').sort((a, b) => a.positionIndex - b.positionIndex)
    this.TaskCollumnFive = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.TaskCollumnSix = [10];
    this.TaskCollumnSeven = [20, 30, 40];


  }

  gettasks() {
    return this.fbTaskService.tasksArray.sort((a, b) => a.positionIndex - b.positionIndex);
  }

  getTaskCollumnOne() {
    return this.fbTaskService.tasksArray.filter(task => task.status === 'to-do').sort((a, b) => a.positionIndex - b.positionIndex)
  }
  getTaskCollumnTwo() {
    return this.fbTaskService.tasksArray.filter(task => task.status === 'in-progress').sort((a, b) => a.positionIndex - b.positionIndex)
  }
  getTaskCollumnThree() {
    return this.fbTaskService.tasksArray.filter(task => task.status === 'await-feedback').sort((a, b) => a.positionIndex - b.positionIndex)
  }
  getTaskCollumnFour() {
    return this.fbTaskService.tasksArray.filter(task => task.status === 'done').sort((a, b) => a.positionIndex - b.positionIndex)
  }
  getTaskCollumnFive() { return this.TaskCollumnFive; }
  getTaskCollumnSix() { return this.TaskCollumnSix; }
  getTaskCollumnSeven() { return this.TaskCollumnSeven; }


  drop2(n: any) { }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex,);
      console.log(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex,);
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return true; //item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return true;
  }

  newPredicate() {
    return true;
  }



}