import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, onSnapshot, orderBy, query, where } from '@angular/fire/firestore';
import { addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { ITask } from '../interfaces/i-task';
import { FbService } from './fb-service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FbTaskService {
  private db = inject(Firestore);
  private fbService = inject(FbService);

  myTasks;
  task: ITask;
  currentTask: ITask;
  tasksArray: ITask[];

  tasksCollection = collection(this.db, 'tasks');
  tasksCollectionFiltered = query(this.tasksCollection, where('ownerId', '==', this.fbService.getCurrentUserId()));
  //tasksCollectionSorted = query(this.tasksCollectionFiltered, orderBy('positionIndex', 'asc'));


  constructor() {



    this.task = {} as ITask;
    this.tasksArray = [];
    this.currentTask = { positionIndex: 0, createDate: '', ownerId: 'ownerId', title: '', description: '', dueDate: '', completed: false, priority: 'low' } as ITask; //, assignTo: [], category: { name: '', color: '' }, subTasks: [], status: 'to-do' } as ITask;

    this.myTasks = onSnapshot(this.tasksCollectionFiltered, (snapshot) => {
      this.tasksArray = [];
      snapshot.forEach((element) => {
        this.tasksArray.push({ dbid: element.id, ...element.data() } as ITask);
      });
      // Sort tasks by positionIndex
      this.tasksArray.sort((a, b) => (a.positionIndex ?? 0) - (b.positionIndex ?? 0));
      console.log(this.tasksArray);
    });


    //this.addTaskTest('test2');

  }


  async addTaskTest(title: string) {
    const createDate = new Date().toISOString();
    await addDoc(this.tasksCollection, { title: title, createDate, ownerId: this.fbService.getCurrentUserId(), description: '', dueDate: '', completed: false  } as ITask); //, priority: 'low', assignTo: [], category: { name: '', color: '' }, subTasks: [], status: 'to-do' } as ITask);
  }



  async addTask(task: ITask) {
    await addDoc(this.tasksCollection, task);
  }


  getCurrentUserId(): string {
    return this.fbService.getCurrentUserId();
  }
  onDestroy() {
    this.myTasks();
  }

}