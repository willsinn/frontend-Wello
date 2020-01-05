import React from "react";
import { connect } from "react-redux";
import { deleteProjectWorkspace } from "../actions/projects";
import { clearWorkspace } from "../actions/workspace";

const WorkspaceMenuBtns = (props, { dispatch }) => {
  const handleDelete = e => {
    props.dispatch(deleteProjectWorkspace(props.workspace));
    props.dispatch(clearWorkspace());
  };
  return (
    <button onClick={e => handleDelete(e)} className="navbar-btn">
      <span className="del-icon" />
    </button>
  );
};

export default connect()(WorkspaceMenuBtns);
