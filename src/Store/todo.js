import {action, makeAutoObservable, observable} from "mobx";

class Todo{
  todos = [
    { id:1, title:'first', completed: false},
    { id:2, title:'second', completed: false},
    { id:3, title:'third', completed: false}
  ]
  constructor() {
    makeAutoObservable(this)

  }
  addTodo(todo){
    this.todos.push(todo)
  }
  removeTodo(id){
    this.todos = this.todos.filter(todo=>todo.id !== id)
  }
  completeTodo(id){
    // this.todos = this.todos.map(todo=>todo.id === id ? {
    this.todos = this.todos.map(todo=>todo.id === id ? {
     ...todo, completed:!todo.completed}:todo)
  }
 fetchlist(){
   fetch('https://jsonplaceholder.typicode.com/todos/')
     .then(response => response.json())
     .then( obj=> this.todos=[...obj]
     )
 }
}


export default new Todo();
