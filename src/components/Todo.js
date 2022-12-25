import {BsCheckLg, BsEraserFill} from 'react-icons/bs'

const Todo = (props)=>{
    const {todo, idx, completeTodo, deleteTodo, ...others} = props;
    
    const handleComplete = ()=>{
        completeTodo(idx);
    }

    const handleDelete = () => {
        deleteTodo(idx);
    }

    return (
        <div className="todo" {...others}
            
        >
            <p className = "todo-text" style={{ textDecoration: todo.isComplete ? 'line-through': 'none'}}>
                { todo.text }    
            </p>
            <div className="actions">
                <button className="action" onClick = {()=> handleComplete()}>
                    <BsCheckLg/>
                </button>
                <button className = "action" onClick = {()=> handleDelete()}>
                    <BsEraserFill/>
                </button>   
            </div>
        </div>
    );
}

export default Todo;

