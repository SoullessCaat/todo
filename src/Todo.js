import React from 'react';

const Todo = ({todo, handleCheck}) => {
    
    const handleClick = (e) => {
        e.preventDefault();
        handleCheck(e.currentTarget.id);
    }

    return (
        <div id={todo.id} 
            value={todo.id}
            name="todo"
            onClick={handleClick}
            className={!todo.done ? "todo" : "todo-done"}>
               {todo.task} 
        </div>
    )
};

export default Todo;