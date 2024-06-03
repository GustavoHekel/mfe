import React, {ChangeEvent, FormEvent, useState} from "react";
import {useToDo} from "@/hooks/useToDo";

const ToDoForm: React.FC = () => {

    const [toDo, setToDo] = useState<string>('');

    const {addTodo} = useToDo()

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (toDo.length === 0) {
            alert('Please insert a to do')
            return
        }
        addTodo(toDo)
        setToDo('')
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value)
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                gap: '16px'
            }}
        >
            <input type={"text"} placeholder={"Add todo item"} value={toDo} onChange={handleOnChange}/>
            <button type="submit">Add To Do</button>
        </form>
    )
}

export default ToDoForm