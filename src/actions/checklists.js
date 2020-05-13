export const setLists = (checklists) => ({
  type: "SET_LISTS",
  checklists,
});
export const addList = (checklist) => ({
  type: "ADD_LIST",
  checklist,
});
export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});
export const updateItem = (item) => ({
  type: "UPDATE_ITEM",
  item,
});
export const updateChecklist = (checklist) => ({
  type: "UPDATE_CHECKLIST",
  checklist,
});
export const removeChecklist = (checklist) => ({
  type: "REMOVE_CHECKLIST",
  checklist,
});
export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});
export const postNewChecklist = (task, title) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/task/${task.id}/checklists/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        task_id: task.id,
        title: `${title}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addList(JSONresponse)));
  };
};
export const fetchChecklists = (task) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/task/${task.id}/checklists`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(setLists(JSONresponse)));
  };
};
export const saveChecklistTitle = (checklist, title) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/checklists/${checklist.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: checklist.id,
        title: `${title}`,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateChecklist(JSONresponse)));
  };
};

export const deleteChecklist = (checklist) => {
  return (dispatch) => {
    dispatch(removeChecklist(checklist));
    fetch(`http://localhost:3000/api/v1/checklists/${checklist.id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: checklist.id,
      }),
    });
  };
};
export const postNewListItem = (checklist, detail) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/checklist/${checklist.id}/item/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        checklist_id: checklist.id,
        detail: detail,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(addItem(JSONresponse)));
  };
};
export const saveItemDetail = (item, detail) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/items/${item.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        item_id: item.id,
        detail: detail,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateItem(JSONresponse)));
  };
};
export const updateItemCompletion = (item) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/items/${item.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ item_id: item.id, completed: !item.completed }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => dispatch(updateItem(JSONresponse)));
  };
};
export const deleteItem = (item) => {
  return (dispatch) => {
    dispatch(removeItem(item));
    fetch(`http://localhost:3000/api/v1/items/${item.id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: item.id,
      }),
    });
  };
};
