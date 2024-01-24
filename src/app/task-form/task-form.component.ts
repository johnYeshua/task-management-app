import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  newTask: Task = {id: 0, title: '', description: '', completed: false};
  
  constructor(private taskService: TaskService){}
  //spread ...
  //Math.floor(Math.random() * 100)
  addTask(){
    this.taskService.addTask({...this.newTask, id: Date.now()});
    this.newTask = {id: 0, title: '', description: '', completed: false};
  }
}
