import React from "react";
import TaskChecklistItem from "./TaskChecklistItem";
import { connect } from "react-redux";

const TaskChecklists = (props, { task, dispatch }) => {
  console.log(props.checklists);
  const renderChecklists = () => {
    return props.checklists.map((checklist) => {
      return <TaskChecklistItem checklist={checklist} />;
    });
  };
  return <div>{renderChecklists}</div>;
};

const mapStateToProps = (state) => {
  return {
    checklists: state.checklistsReducer.checklists,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskChecklists);
