import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDoForm from './ToDoForm';
import { useToDo } from '@/hooks/useToDo';

jest.mock('../../hooks/useToDo');

describe('ToDoForm', () => {
    const addTodo = jest.fn();

    beforeEach(() => {
        (useToDo as jest.Mock).mockReturnValue({
            addTodo,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders form elements correctly', () => {
        render(<ToDoForm />);
        expect(screen.getByPlaceholderText('Add todo item')).toBeInTheDocument();
        expect(screen.getByText('Add To Do')).toBeInTheDocument();
    });

    test('allows user to type into the input', () => {
        render(<ToDoForm />);
        const input = screen.getByPlaceholderText('Add todo item') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'New ToDo' } });
        expect(input).toHaveValue('New ToDo');
    });

    test('calls addTodo and clears input on form submission', () => {
        render(<ToDoForm />);
        const input = screen.getByPlaceholderText('Add todo item') as HTMLInputElement;
        const button = screen.getByText('Add To Do');

        fireEvent.change(input, { target: { value: 'New ToDo' } });
        fireEvent.click(button);

        expect(addTodo).toHaveBeenCalledWith('New ToDo');
        expect(input).toHaveValue('');
    });

    test('shows alert when trying to submit empty todo', () => {
        window.alert = jest.fn();

        render(<ToDoForm />);
        const button = screen.getByText('Add To Do');

        fireEvent.click(button);

        expect(window.alert).toHaveBeenCalledWith('Please insert a to do');
        expect(addTodo).not.toHaveBeenCalled();
    });
});
