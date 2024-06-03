import React, {ChangeEvent} from "react";
import {ToDo} from "@/interfaces/ToDo";
import {useToDo} from "@/hooks/useToDo";

interface ToDoItemInterface {
    item: ToDo
}

const ToDoItem: React.FC<ToDoItemInterface> = ({item}) => {

    const {toggleTodo} = useToDo()

    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        toggleTodo(item.id, event.target.checked)
    }

    return (
        <div
            style={{
                display: 'flex',
                width: '120px',
                gap: '24px'
            }}
        >
            <input type={'checkbox'} onChange={handleCheckbox} checked={item.completed}/>
            <h4
                style={{
                    'textDecoration': `${item.completed ? 'line-through' : 'none'}`,
                }}
            >
                {item.detail}
            </h4>
        </div>
    )
}

export default ToDoItem