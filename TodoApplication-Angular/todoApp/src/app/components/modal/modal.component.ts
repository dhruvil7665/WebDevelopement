import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../../app.component';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';
import { DatePipe } from '@angular/common';
import { TodoListComponent } from '../todo-list/todo-list.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show = false;
  @Input() todo:Todo;
  @Input() closeCallback = () => (false);
  todoService: TodoService;
  todoList: TodoListComponent;
  title: string;
  content: string;
  date: Date;
  datePipe: DatePipe;
  dateBind: string;


  constructor( todoService: TodoService, datePipe: DatePipe , todoList: TodoListComponent) {
    this.todoService = todoService;
    this.todoList = todoList;
    this.datePipe = datePipe;

  }
  ngOnInit() {
    console.log(this.todo);
    if(this.todo==undefined){
      this.title='';
      this.content='';
      this.date=new Date();
      this.dateBind=this.datePipe.transform(this.date,'yyyy-MM-ddTHH:mm');
    }else{
      this.title=this.todo.title;
      this.content=this.todo.content;
      this.dateBind=this.datePipe.transform(this.todo.dueDate,'yyyy-MM-ddTHH:mm');
    }

}


// takes the input from the modal content and passes the data to to-do service edit to-do function
  todoUpdate() {
    if(this.title==""||this.title==undefined){
        alert("Title is required");
        return;
    }
    else if(this.todo==undefined){
      console.log('inside create: '+this.title);
      this.todoList.createTodo(this.title,this.content,new Date(this.dateBind),false);
      this.title='';
      this.content='';
      this.date=new Date();
      this.dateBind=this.datePipe.transform(this.date,'yyyy-MM-ddTHH:mm');
      this.closeCallback();
    }
    else {
      console.log(this.todo);
      this.todo.title = this.title;
      this.todo.content = this.content;
      this.todo.dueDate = new Date(this.dateBind);
      this.todoService.editTodo(this.todo);
      this.closeCallback();
    }
  }
}
