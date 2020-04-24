import React, { useState } from "react";
import EditChecklist from "./EditChecklist";
import { deleteChecklist } from "../actions/checklists";
import { connect } from "react-redux";

const Checklist = ({
  checklist,
  editChecklist,
  handleEditTitle,
  handleCloseEditing,
  dispatch,
}) => {
  const [del, setDel] = useState(false);
  return (
    <div className="checklist">
      <div className="task-window-desc">
        {editChecklist.id && checklist.id === editChecklist.id ? (
          <EditChecklist
            checklist={checklist}
            handleCloseEditing={handleCloseEditing}
          />
        ) : (
          <div className="module-header" style={{ margin: "0 0 4px 40px" }}>
            <h3
              className="module-title"
              onClick={(e) => handleEditTitle(checklist)}
            >
              {checklist.title}
            </h3>
            <div className="module-btns">
              <button className="sidebar-btn">Hide Completed Items</button>
              <button className="sidebar-btn">Delete</button>
            </div>
          </div>
        )}
        <div className="module-body"></div>
      </div>
    </div>
  );
};

export default connect()(Checklist);