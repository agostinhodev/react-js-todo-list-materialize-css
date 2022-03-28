import React, { useEffect, useRef, useState } from "react";
import { Datepicker } from "materialize-css";
import moment from "moment";

const Todo: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  const datepickerRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  useEffect(() => {
    Datepicker.init(datepickerRef.current, {
      format: "dd/mm/yyyy",
      onSelect: (date: Date) => setDate(date),
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
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
              />
            </div>
          </div>

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
