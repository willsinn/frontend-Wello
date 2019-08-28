import React, { useState } from "react";
import CardBtns from "./CardBtns";
import EditingForm from "./EditingForm";
import Card from "./Card";

const MenuBtns = props => {
  const [render, setRender] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEdit = e => {
    setEdit(!edit);
    setRender(!render);
  };
  const handleClick = e => {
    if (e) {
      setRender(!render);
    }
  };
  return (
    <div className="render-highlight">
      <div className="card-menu-wrap">
        <input onClick={handleClick} type="checkbox" id="btnControl" />
        <label className="card-menu-btn" htmlFor="btnControl">
          <span className="btn-text">...</span>
        </label>
      </div>

      {edit ? (
        <EditingForm card={props.card} handleEdit={handleEdit} />
      ) : (
        <Card card={props.card} />
      )}
      {render ? <CardBtns card={props.card} handleEdit={handleEdit} /> : null}
    </div>
  );
};

export default MenuBtns;
// {edit ? (
//   <EditingForm
//     card={props.card}
//     subject={subject}
//     handleSave={handleSave}
//   />}
