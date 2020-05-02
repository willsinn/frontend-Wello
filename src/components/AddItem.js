import React, { useState } from "react";
import { postNewListItem } from "../actions/checklists";
import { connect } from "react-redux";

const AddItem = ({ checklist, handleCloseAdd, dispatch }) => {
  const [itemDetail, setItemDetail] = useState("");
  const handleChange = (e) => {
    e.persist(e);
    setItemDetail(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      dispatch(postNewListItem(checklist, itemDetail));
      setItemDetail("");
      handleCloseAdd(e);
    }
  };
  return (
    <div className="editing">
      <div style={{ margin: "4px 0" }}>
        <form
          className="description-form"
          style={{ height: "54px" }}
          onSubmit={handleSubmit}
        >
          <textarea
            className="edit-checklist"
            type="text"
            name="itemDetail"
            onChange={(e) => handleChange(e)}
            value={itemDetail.value}
            placeholder="Add an item."
          />
        </form>
      </div>
      <div>
        <button
          className="add-list-btn"
          style={{ paddingLeft: "12px", paddingRight: "12px", margin: "0" }}
          onClick={handleSubmit}
        >
          Add
        </button>
        <button
          className="close-add-btn"
          style={{ paddingLeft: "12px" }}
          onClick={(e) => handleCloseAdd(e)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};
export default connect()(AddItem);