import {BsCheckLg, BsEraserFill, BsPencilFill, BsPencil} from 'react-icons/bs'

const Todo = (props)=>{
    const {todo, idx, completeTodo, deleteTodo, editKey, editTodo, ...others} = props;
    
    const handleComplete = ()=>{
        completeTodo(idx);
    }

    const handleDelete = () => {
        deleteTodo(idx);
    }

    const handleEdit = () => {
        if (editKey === idx) {
            editTodo(-1);
        } else {
            editTodo(idx);
        }
    }

    return (
        <div className="todo" {...others}>
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
                <button className = "action" onClick = {handleEdit}>
                    {editKey === idx ? <BsPencil/>: <BsPencilFill/>}
                </button>   
            </div>
        </div>
    );
}

export default Todo;

