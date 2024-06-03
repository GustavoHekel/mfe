import React from "react";
import ToDoItem from "@/components/ToDoItem/ToDoItem";
import {ToDo} from "@/interfaces/ToDo";
import {useToDo} from "@/hooks/useToDo";

enum filters {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
}

const ToDoList: React.FC = () => {

    const [toDos, setToDos] = React.useState<ToDo[]>()
    const {getToDos} = useToDo()

    React.useEffect(() => {

        const getFromStorage = () => {
            const toDosFromLocalStorage = getToDos()
            toDosFromLocalStorage && setToDos(toDosFromLocalStorage)
        }

        getFromStorage()
        window.addEventListener("storage", getFromStorage)
        return () => window.removeEventListener("storage", getFromStorage)

    }, [getToDos])

    const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.value === filters.COMPLETED) {
            const filteredList = getToDos()?.filter((t: ToDo) => t.completed)
            setToDos(filteredList)
        } else if (event.currentTarget.value === filters.ACTIVE) {
            const filteredList = getToDos()?.filter((t: ToDo) => !t.completed)
            setToDos(filteredList)
        } else {
            setToDos(getToDos())
        }
    }

    return (
        <div
            style={{
                marginTop: '24px'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '16px',
                    marginBottom: '8px'
                }}
            >
                <button type={"button"} value={filters.ALL} onClick={handleFilter}>All</button>
                <button type={"button"} value={filters.ACTIVE} onClick={handleFilter}>Active</button>
                <button type={"button"} value={filters.COMPLETED} onClick={handleFilter}>Completed</button>
            </div>
            {
                toDos && toDos.length > 0 && toDos.map(toDo => {
                    return (
                        <ToDoItem key={toDo.id} item={toDo}/>
                    )
                })
            }
        </div>
    )
}

export default ToDoList