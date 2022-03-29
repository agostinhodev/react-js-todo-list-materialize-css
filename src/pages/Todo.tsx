import React, { useEffect, useRef, useState } from "react";
import { Datepicker } from "materialize-css";
import moment from "moment";
import { Todo as TodoModel } from "../models/Todo";
import { v4 as uuid } from "uuid";
import TodoItem from "../components/TodoItem";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Array<TodoModel>>([] as Array<TodoModel>);

  const [description, setDescription] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(null);

  const datepickerRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  useEffect(() => {
    Datepicker.init(datepickerRef.current, {
      format: "dd/mm/yyyy",
      onSelect: (date: Date) => setDate(date),
    });
  }, []);

  const resetInputsToDefaults = () => {
    setDescription("");
    setDone(false);
    setDate(null);
  };

  const handleCreateNewTodo = (event: React.FormEvent) => {
    event.preventDefault();

    let todo: TodoModel = {
      id: uuid(),
      description,
      date,
      done,
    };

    setTodos((currents) => [...currents, todo]);

    resetInputsToDefaults();
  };

  const removeTodo = (id: string): void => {
    if (window.confirm("Are you sure?")) {
      let todosCopy = [...todos];
      todosCopy = todosCopy.filter((item) => item.id !== id);
      setTodos(todosCopy);
    }
  };

  return (
    <div className="container">
      <h5>Create your TODO</h5>
      <div className="row">
        <form className="col s12" onSubmit={handleCreateNewTodo}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                ref={datepickerRef}
                value={date === null ? "" : moment(date).format("DD/MM/YYYY")}
                onChange={() => {}}
                placeholder="Please pick a date..."
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                className="materialize-textarea"
                placeholder="Please provide a description..."
                required
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <div className="switch">
                <label>
                  Not Done
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={(event) => {
                      setDone(Boolean(event.target.checked));
                    }}
                  />
                  <span className="lever"></span>
                  Done
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>

      {todos.length === 0 && (
        <div className="card-panel blue lighten-2 center white-text">
          <i className="material-icons center">info</i> No todos found
        </div>
      )}

      {todos.length > 0 && (
        <table className="striped">
          <thead>
            <tr>
              <th>Id:</th>
              <th>Status:</th>
              <th>Description:</th>
              <th>Date:</th>
              <th>Action:</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => (
              <TodoItem todo={item} key={index} removeTodo={removeTodo} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Todo;
