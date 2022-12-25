import React from 'react';
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';

const initialState = [
  { text: "Learn about React",
    isComplete: false,
  },
  { text: "Meet friend for lunch",
    isComplete: false,
  },
  { text: "Build really cool todo app",
    isComplete: false,
  },
];

function App() {
  const [ todos, setTodos ] = useState(initialState);

  const addTodo = (value)=>{
    const _todos = [...todos, { text: value }];
    console.log(_todos);
    setTodos(_todos);
  }
  const completeTodo = (idx) => {
    const _todos = [...todos];
    _todos[idx].isComplete = true;
    setTodos(_todos);
  }

  const deleteTodo = (idx) => {
    const _todos = [...todos];
    _todos.splice(idx, 1);
    setTodos(_todos);
  }

  return (
    <div className="app">
      <div className='todo-list'>
        {
          todos.map((todo, idx) =>{
            return <Todo 
              todo={ todo } 
              key={ idx } 
              idx={ idx }
              completeTodo = { completeTodo }
              deleteTodo = { deleteTodo }
            />
          })
        }
        <TodoForm 
          addTodo = {addTodo}
        />
      </div>
    </div>
  );
}

export default App;
