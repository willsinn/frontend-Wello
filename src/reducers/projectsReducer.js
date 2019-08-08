import { setProjects, addNewProject } from "../actions/project";

const defaultState = {
  projects: []
};

const projectsReducer = (state = defaultState, action) => {
  console.log(action);
  debugger;
  switch (action.type) {
    case "SET_PROJECTS":
      return [...state.projects, action.projects.projects];
    case "ADD_NEW_PROJECT":
      return [...state.projects, action.project];
    default:
      return state;
  }
};
export default projectsReducer;
