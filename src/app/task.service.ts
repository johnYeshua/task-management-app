// Task Service: Create a 
// TaskService to manage tasks. Implement 
// methods to get tasks, add a task, mark a 
// task as completed, and delete a task.

import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
    providedIn: 'root',
})

export class TaskService {
    private tasks: Task[] = [];


    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task){
        this.tasks.push(task);
    }

    markAsCompleted(id: number){
        const task = this.tasks.find((tsk) => tsk.id === id);
        if(task){
            task.completed = true;
        }
    }

    deleteTask(id: number){
        console.log("Delete task was called!");
        this.tasks = this.tasks.filter((task)=> task.id !== id);  
    //   console.log("Delete Task method was called!");
    //   const task = this.tasks.find((tsk) => tsk.id === id);
    //   const position = id + 1;
    //   if(task){
    //     this.tasks.splice(position, 1);
    //   }
    }
}