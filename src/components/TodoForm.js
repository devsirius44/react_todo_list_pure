import { useState } from 'react';

const TodoForm  = (props) => {
    const { addTodo } = props;
    const [ txt, setTxt ] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!txt) {
            alert('please input the text');
            return;
        }
        addTodo(txt);
        setTxt("");
    }
    
    return (
        <form onSubmit = { handleSubmit } className="todo-form">
            <input 
                type="text" 
                value = {txt}
                className = "input"
                onChange={ (e) => setTxt( e.target.value ) }
            /> 
            <button type="submit" className='submit-button'>SUBMIT</button>
        </form>
    )
}

export default TodoForm;