import React, { useState } from "react";
import { saveTaskDesc } from "../actions/workspace";

import { connect } from "react-redux";

const TaskWindowDescription = ({ editTask, dispatch }) => {
  const [desc, setDesc] = useState(editTask.task_desc);
  const [editable, setEditable] = useState(false);
  const handleChange = (e) => {
    e.persist(e);
    setDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(saveTaskDesc(editTask, desc));
      setEditable(false);
    }
  };
  const handleExitEditable = (e) => {
    setEditable(false);
    setDesc(editTask.task_desc);
  };
  console.log(desc.length, desc);

  return (
    <div className="task-window-desc">
      <div className="module-header">
        <h3 className="module-title">Description</h3>
        {desc.length > 0 ? (
          <div className="editable-desc" onClick={(e) => setEditable(true)}>
            <button className="edit-desc-btn">Edit</button>
          </div>
        ) : null}
      </div>

      {!editable ? (
        <>
          {desc.length > 0 ? (
            <div className="module-body" onClick={(e) => setEditable(true)}>
              <p className="curr-desc">{desc}</p>
            </div>
          ) : (
            <div
              className="desc-placeholder"
              onClick={(e) => setEditable(true)}
            >
              <p>Add a more detailed description...</p>
            </div>
          )}
        </>
      ) : (
        <div className="editing">
          <form className="description-form" onSubmit={handleSubmit}>
            <textarea
              className="description-field"
              type="text"
              name="desc"
              value={desc}
              onChange={(e) => handleChange(e)}
            />
          </form>
          <button
            className="add-list-btn"
            style={{ paddingLeft: "12px", paddingRight: "12px", margin: "0" }}
            onClick={handleSubmit}
          >
            Save
          </button>
          <button className="close-add-btn" onClick={handleExitEditable}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
export default connect()(TaskWindowDescription);
