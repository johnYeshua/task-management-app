// Task List Component: Create a 
// TaskListComponent that displays a 
// list of tasks. Use data binding to 
// dynamically display task information. 
// Include buttons to mark tasks as 
// completed or delete them.

import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{

  tasks: Task[] = [];
  constructor(private taskService: TaskService){
    this.tasks = taskService.getTasks();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  markAsCompleted(id: number){
    this.taskService.markAsCompleted(id);
  }
  
  deleteTask(id: number){
    console.log(id)
    this.taskService.deleteTask(id);
  }
}
