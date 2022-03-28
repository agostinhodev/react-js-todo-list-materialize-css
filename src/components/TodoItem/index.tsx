import moment from "moment";
import React from "react";
import { Todo } from "../../models/Todo";

interface TodoItemProps {
  todo: Todo;
  removeTodo(id: string): void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo }) => {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.done ? "Done" : "Pending"}</td>
      <td>{todo.description.trim()}</td>
      <td>{moment(todo.date).format("DD/MM/YYYY")}</td>
      <td>
        <button
          className="waves-effect waves-light btn red"
          onClick={() => removeTodo(todo.id)}
        >
          <i className="material-icons left">delete</i>REMOVE
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
