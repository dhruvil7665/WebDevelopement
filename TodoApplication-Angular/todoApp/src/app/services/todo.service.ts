import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
import {Observable} from 'rxjs';
import {Todo} from "../model/todo";




@Injectable()
export class TodoService {

  todoResource: string;
  todoResourceURL: string;

  constructor(private http: HttpClient) {
    this.todoResource = 'todoApp';
    this.todoResourceURL = `${environment.serverBaseURL}/${this.todoResource}`;
  }

// gets all the to-dos from the server using get method in http
  getTodos(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>(this.todoResourceURL);
  }

  // getTodos(): Tod[] {
  //   this.http.get(API_URL + '/todos')
  //     .pipe(catchError(this.errorHandler))
  //     .subscribe((response: any) => {
  //       this.todos = response;
  //     })

  //   return this.todos;
  // }

    // errorHandler(error: HttpErrorResponse) {
    //   return observableThrowError(error.message || 'Something went wrong!!!!');
    // }

// creates a to-do using http post function
  createTodo(title:string,content:string,dueDate:Date,completed:boolean): Observable<Todo> {
    let newTodo = new Todo(title,content,dueDate,completed);
    //console.log("title"+title);
    return this.http.post<Todo>(this.todoResourceURL, newTodo);
  }

// deletes a to-do using http delete method
  deleteTodo(id : number): Observable<Todo> {

    return this.http.delete<Todo>(this.todoResourceURL + "/" + id);

  }
// updates existing to-do using the put method in http and storing it via the api in server
  editTodo(todo: Todo):void{

    this.http.put<Todo>(this.todoResourceURL + "/" + todo.id, {
      title: todo.title,
      completed: todo.completed,
      content : todo.content,
      dueDate:todo.dueDate

    }).subscribe((respons:any)=>{})
  }
}
