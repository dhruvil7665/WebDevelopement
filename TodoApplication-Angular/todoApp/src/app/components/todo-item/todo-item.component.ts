import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';
import {TodoService} from '../../services/todo.service';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {Observable} from 'rxjs';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  todoservice: TodoService;
  showModal = false;
  todoListComponent: TodoListComponent;
  appComp: AppComponent;


  constructor(todoservice: TodoService , todoListComponent: TodoListComponent, appcomp: AppComponent ) {
    this.todoservice = todoservice;
    this.todoListComponent = todoListComponent;
    this.appComp = appcomp;
  }
  ngOnInit() {
  }
// this function toggles the modal component's visibility //
  toggleModal = () => {
    this.showModal = !this.showModal;
  }
}
