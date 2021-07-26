import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList, handleCheck, handleRemove}) => {
    return (
        <div>
            {todoList.map(todo => {
               return (
                <div className="todo-list" key={todo.id + todo.task}>
                    <Todo todo={todo} handleCheck={handleCheck} handleRemove={handleRemove} />
                </div>
               ) 
            })}
            <button className="delete-button" onClick={handleRemove}>Delete completed tasks</button>
        </div>
    )
}

export default TodoList;