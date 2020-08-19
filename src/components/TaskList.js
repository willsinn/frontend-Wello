import React, { useState } from "react";
import Task from "../containers/Task";
import AddTask from "../components/AddTask";
import TaskWindow from "../containers/TaskWindow";
import QuickTaskEditor from "../components/QuickTaskEditor";
import { connect } from "react-redux";

const TaskList = ({ card, checklists }) => {
  const [addTask, setAddTask] = useState(false);
  const [editor, setEditor] = useState(false);
  const [window, setWindow] = useState(false);
  const [editTask, setEditTask] = useState({});
  const handleUpdateEditTask = (note) => {
    setEditTask({ ...editTask, note });
  };
  const handleRenderQuickEditor = (e, task) => {
    if (e) {
      setEditTask(task);
      setEditor(task.id);
    }
  };
  const handleCloseQuickEditor = () => {
    setEditTask({});
    setEditor(false);
  };
  const handleRenderTaskWindow = (e, task) => {
    if (e) {
      setEditTask(task);
      setWindow(true);
    }
  };
  const handleCloseWindow = () => {
    setEditTask({});
    setWindow(false);
  };
  const handleAddTask = (e) => {
    if (e) {
      setAddTask(true);
    }
  };
  const handleCloseAddTask = (e) => {
    if (e) {
      setAddTask(false);
    }
  };
  const renderTasks = () => {
    if (card && card.tasks && card.tasks.length > 0) {
      return card.tasks.map((task) => {
        let todos = 0;
        let finished = 0;
        checklists.forEach((ck) => {
          if (ck.task_id === task.id && ck.items.length > 0) {
            [...ck.items].forEach((itm) => {
              todos++;
              if (itm.completed) {
                finished++;
              }
            });
          }
        });
        if (!task.archived) {
          return (
            <Task
              key={task.id}
              todos={todos}
              finishedTodos={finished}
              task={task}
              handleRenderTaskWindow={handleRenderTaskWindow}
              handleRenderQuickEditor={handleRenderQuickEditor}
              editor={editor}
              window={window}
              editTask={editTask}
              handleCloseQuickEditor={handleCloseQuickEditor}
              handleCloseWindow={handleCloseWindow}
              handleUpdateEditTask={handleUpdateEditTask}
              card={card}
            />
          );
        } else {
          return null;
        }
      });
    }
  };
  return (
    <div className="task-list">
      {renderTasks()}
      {window && !editor && editTask ? (
        <TaskWindow
          cardGoal={card.goal}
          editTask={editTask}
          handleCloseWindow={handleCloseWindow}
          handleUpdateEditTask={handleUpdateEditTask}
        />
      ) : null}
      {addTask ? (
        <AddTask card={card} handleCloseAddTask={handleCloseAddTask} />
      ) : (
        <div className="task-composer" onClick={(e) => handleAddTask(e)}>
          <span className="open-task-composer">
            <span
              style={{
                fontSize: "22px",
                fontWeight: "300",
                padding: "0 4px",
              }}
            >
              +
            </span>
            Add another task
          </span>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    checklists: state.checklistsReducer.checklists,
  };
};
export default connect(mapStateToProps)(TaskList);
