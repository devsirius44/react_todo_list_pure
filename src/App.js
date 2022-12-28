import React from 'react';
import { useState, useEffect} from 'react';

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
  const [editKey, setEditkey] = useState(-1);
  const [editText, setEditText] = useState("");

  useEffect(()=>{
    if ( editKey === -1) {
      setEditText("");

    } else {
      console.log(todos[editKey].text);
      setEditText((todos[editKey]).text);
    }
  }, [editKey]);

  const addTodo = (value, editKey)=>{
    // when adding the new todo
    if (editKey === -1) {
      const _todos = [...todos, { text: value }];
      console.log(_todos);
      setTodos(_todos);
    } else {
    //  when editing...
      var _todo = todos.splice(editKey, 1);
      _todo.text = value;
      setTodos([...todos, _todo]);
      setEditkey(-1);
      
    }
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
              editKey = {editKey}     // edit key prop
              editTodo = {setEditkey} // prop change func
            />
          })
        }
        <TodoForm 
          addTodo = {addTodo}
          editKey = {editKey}
          editText = {editText}
        />
      </div>
    </div>
  );
}

export default App;
