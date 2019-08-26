import React from "react";
import { deleteCard } from "../actions/workspace";
import { toggleEdit } from "../actions/workspace";
import { connect } from "react-redux";

const CardBtns = (props, { dispatch }) => {
  const handleDelete = e => {
    if (e) {
      props.dispatch(deleteCard(props.card));
      props.dispatch(toggleEdit());
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>del</button>
      <button onClick={e => props.handleEdit(e, props.card)}>edit</button>
    </div>
  );
};

export default connect()(CardBtns);
