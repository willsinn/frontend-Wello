const defaultState = {
  workspace: {}
};

const workspaceReducer = (state = defaultState, action) => {
  console.log(state.workspace);
  console.log(action);
  switch (action.type) {
    case "ADD_WORKSPACE_ITEM":
      return {
        ...state,
        items: [...state.workspace.items, action.item]
      };
    case "CLEAR_WORKSPACE":
      return { ...state, workspace: defaultState };
    case "SET_WORKSPACE":
      return { ...state, workspace: action.workspace.project };
    default:
      return state;
  }
};
export default workspaceReducer;
