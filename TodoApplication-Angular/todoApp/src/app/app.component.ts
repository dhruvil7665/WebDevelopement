import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "./model/todo";

import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  todoList: Array<Todo>;
  // constructor for app component which is calling the get to-do function
  constructor(todoService: TodoService) {
    todoService.getTodos().subscribe(todos => {
      this.todoList = todos;
      console.log(this.todoList);
    });
  }
}
