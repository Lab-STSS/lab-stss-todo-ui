import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoModel} from "../../../models/todo-model";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() addElementTodoListEvent = new EventEmitter();
  todoItem: TodoModel = {
    title: "",
    date: "",
    done: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  addElementTodoListClick = () => {
    this.addElementTodoListEvent.emit(this.todoItem);
    this.todoItem = {
      title: "",
      date: "",
      done: false
    };
  }

}
