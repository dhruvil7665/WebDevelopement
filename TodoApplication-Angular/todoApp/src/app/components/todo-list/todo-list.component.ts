import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../services/todo.service";
import {Observable} from "rxjs";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),

    ])
  ],
  styleUrls: ['./todo-list.component.scss']

})
export class TodoListComponent implements OnInit {

@Input() todoList : Array<Todo>;
  showModal = false;
  todo : Todo;
  todoservice : TodoService;
  constructor(todoService : TodoService) {
    this.todoservice=todoService;
  }

  ngOnInit() {
  }

//create to-do function that subscribes to to-do service function that returns an observable
  createTodo( title:string, content :string, dueDate:Date , completed:boolean) {
    let newTodo$: Observable<Todo> = this.todoservice.createTodo(title,content,dueDate,completed);
    newTodo$.subscribe(newTodo => {
      newTodo.title=title;
      newTodo.content=content;
      newTodo.dueDate=dueDate;
      newTodo.completed=completed;
      this.todoList.push(newTodo);
    });
  }
// deletes a to-do passed from the delete button in to-do item component
  deleteTodo(todo) {
    let id = todo.id;
    this.todoservice.deleteTodo(todo.id).subscribe(todo=>{
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    });
  }

// toggle function to show/hide modal component
  toggleModal = () => {

    this.showModal = !this.showModal;

  }
}
