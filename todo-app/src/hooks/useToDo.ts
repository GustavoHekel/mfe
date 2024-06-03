import {ToDo} from "@/interfaces/ToDo";
import React from "react";

export const useToDo = () => {

    const checkLocalStorage = () => {
        if (typeof localStorage === "undefined") {
            throw new Error('Local storage is not available.');
        }
    }

    const setToDos = (list: ToDo[]) => {
        checkLocalStorage()
        localStorage.setItem('toDos', JSON.stringify(list))
        window.dispatchEvent(new Event('storage'))
    }

    const getToDos = React.useCallback(() => {
        checkLocalStorage()
        const toDoList = localStorage.getItem('toDos')
        return toDoList ? JSON.parse(toDoList) : []
    },[])

    const addTodo = (value: string) => {
        checkLocalStorage()
        const toDoList = getToDos()
        const toDoItem: ToDo = {
            id: crypto.randomUUID(),
            completed: false,
            detail: value
        }

        toDoList.push(toDoItem)
        setToDos(toDoList as ToDo[])
    }

    const toggleTodo = (id: string, value: boolean) => {
        checkLocalStorage()
        const toDoList = getToDos()
        const toDoItems = toDoList.map((item: ToDo) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: value
                }
            }

            return item
        })
        setToDos(toDoItems)
    }

    return {
        getToDos,
        addTodo,
        toggleTodo
    }

}