import React, { useState } from "react";
import WindowDescription from "./WindowDescription";
import { updateTaskNote } from "../actions/workspace";
import { connect } from "react-redux";

const initialState = { note: "" };

const TaskWindow = ({
  editTask,
  handleCloseWindow,
  handleUpdateEditTask,
  dispatch,
}) => {
  const [task, setTask] = useState({});
  const [note, setNote] = useState(initialState);

  const handleNoteEdit = () => {
    setTask(editTask);
    setNote(editTask.note);
  };
  const clearState = (e) => {
    setNote({ ...initialState });
    setTask({});
    // e.target.firstElementChild.value = "";
  };
  const handleChange = (e) => {
    e.persist();
    setNote(e.target.value);
  };
  const handleSave = () => {
    if (editTask.note === note) {
      clearState();
    } else {
      handleUpdateEditTask(note);
      dispatch(updateTaskNote(task, note));
      clearState();
    }
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      handleUpdateEditTask(note);
      dispatch(updateTaskNote(task, note));
      clearState(e);
    }
  };
  return (
    <div className="window-modal">
      <div className="task-window">
        <div className="close-task-window" onClick={(e) => handleCloseWindow()}>
          ✕
        </div>
        <div className="task-detail-window">
          <div className="task-window-header">
            {task.id === undefined ? (
              <h2 className="card-text" onClick={(e) => handleNoteEdit()}>
                {editTask.note}
              </h2>
            ) : (
              <form className="edit-note-form" onSubmit={handleSubmit}>
                <input
                  className="edit-input"
                  type="text"
                  name="note"
                  onChange={handleChange}
                  value={note}
                  required
                />
              </form>
            )}
          </div>
          <div className="task-window-body" onClick={handleSave}>
            <WindowDescription />
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect()(TaskWindow);
