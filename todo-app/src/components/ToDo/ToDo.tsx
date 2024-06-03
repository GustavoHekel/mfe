import React from "react";
import ToDoForm from "@/components/ToDoForm/ToDoForm";
import ToDoList from "@/components/ToDoList/ToDoList";

const ToDo: React.FC = () => {
    return <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginTop: '48px'
        }}
    >
        <h1>Todo APP</h1>
        <ToDoForm/>
        <ToDoList/>
    </div>
}

export default ToDo