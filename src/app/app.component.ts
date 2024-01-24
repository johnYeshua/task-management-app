// App Component: Set up the main AppComponent 
// to use the TaskListComponent and TaskFormComponent. 
// Use the TaskService to manage tasks.



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-management-app';
  
}
