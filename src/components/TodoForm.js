import { useEffect, useState } from 'react';

const TodoForm  = (props) => {
    const { addTodo, editKey, editText} = props;
    const [ txt, setTxt ] = useState(editText);
    const btnName = editKey === -1 ? "Submit": "Edit";

    useEffect(()=>{
        setTxt(editText);
    }, [editText])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!txt) {
            alert('please input the text');
            return;
        }
        addTodo(txt, editKey);
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
            <button type="submit" className='submit-button'>{btnName}</button>
        </form>
    )
}

export default TodoForm;