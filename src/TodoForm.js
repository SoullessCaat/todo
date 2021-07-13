import React, {useState} from 'react';

const TodoForm = ({ addTask }) => {
    
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput('');
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input value={input} type="text" placeholder="Enter todo..." onChange={onChange}></input>
        </form>
    )
}

export default TodoForm;