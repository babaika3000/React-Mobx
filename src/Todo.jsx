import React from 'react';
import {observer} from "mobx-react-lite";
import todolist from "./Store/todo";

const Todo = observer( () => {
  return (
    <div>
      {todolist.todos.map(todo=>

        <div key={todo.id}>
          <input
            type={"checkbox"}
                 checked={todo.completed}
                 onChange={()=>todolist.completeTodo(todo.id ) }/>
          {todo.title}
          <button onClick={()=>todolist.removeTodo(todo.id)}>Delete</button>
        </div>
      )}
      <button onClick={()=>todolist.fetchlist()}>Fetch</button>
    </div>
  );
});

export default Todo;
