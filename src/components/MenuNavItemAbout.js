import React from "react";

const MenuNavItemAbout = props => {
  return (
    <div className="board-menu-container">
      <div className="board-menu-sidebar-content">
        <div className="board-menu-header-content">
          <button
            className="board-menu-back-btn"
            onClick={e => props.setContent("")}
          >
            <span className="back-text">←</span>
          </button>
          <h3 className="board-menu-header-title js-board-menu-title-text">
            About This Board
          </h3>
          <button
            className="board-menu-close-btn"
            onClick={e => props.setSidebar(false)}
          >
            <span className="close-text">✕</span>
          </button>
        </div>
        <hr />
        <div className="board-menu-content" />
      </div>
    </div>
  );
};

export default MenuNavItemAbout;
