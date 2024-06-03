import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToDoItem from './ToDoItem';
import { useToDo } from '@/hooks/useToDo';
import { ToDo } from '@/interfaces/ToDo';

jest.mock('../../hooks/useToDo');

describe('ToDoItem', () => {
    const toggleTodo = jest.fn();

    beforeEach(() => {
        (useToDo as jest.Mock).mockReturnValue({
            toggleTodo,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const sampleTodo: ToDo = {
        id: "1",
        detail: 'Sample ToDo',
        completed: false,
    };

    test('renders todo item correctly', () => {
        render(<ToDoItem item={sampleTodo} />);
        expect(screen.getByText('Sample ToDo')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    test('checkbox reflects completed status', () => {
        render(<ToDoItem item={{ ...sampleTodo, completed: true }} />);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    test('displays item detail with appropriate text decoration', () => {
        render(<ToDoItem item={{ ...sampleTodo, completed: true }} />);
        const detail = screen.getByText('Sample ToDo');
        expect(detail).toHaveStyle('text-decoration: line-through');
    });

    test('displays item detail with no text decoration when not completed', () => {
        render(<ToDoItem item={sampleTodo} />);
        const detail = screen.getByText('Sample ToDo');
        expect(detail).toHaveStyle('text-decoration: none');
    });
});
