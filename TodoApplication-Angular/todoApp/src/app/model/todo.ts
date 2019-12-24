// model class for stating the schema of the todos
export class Todo {
  id : number;
  title: string;
  content: string;
  completed : boolean;

  createdDate: Date;
  modifiedDate: Date;
  dueDate :Date;
  constructor(title: string, content: string , dueDate :Date ,completed:boolean) {
    this.title = title;
    this.content = content;
    this.completed=completed;
    this.createdDate = new Date();
    this.modifiedDate = new Date();
    this.dueDate = dueDate;
  }
}
