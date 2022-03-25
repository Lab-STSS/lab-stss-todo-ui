import { Component, OnInit } from '@angular/core';
import {TodoModel} from "../../models/todo-model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: TodoModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addElementTodoListEventListener = (todoListItem: TodoModel) => {
    this.todoList.push(todoListItem);
  }

}
