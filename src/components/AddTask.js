import React from "react";

const AddTask = props => {
  return (
    <div className="card-item-wrap">
      <div className="card-item">
        <form onSubmit>
          <input
            className="add-card-input"
            type="text"
            name="goal"
            value=""
            placeholder="input new task name"
            required
          />
          <button onClick className="add-list-btn" type="submit">
            Add Task
          </button>
          <button
            onClick={e => props.handleCloseTaskForm(e)}
            className="close-add-btn"
          >
            ✕
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
