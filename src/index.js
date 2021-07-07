import { TodoList } from './classes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.array.forEach(crearTodoHtml);
