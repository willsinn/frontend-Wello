import React, { useState } from "react";

const BoardMenuNavList = () => {
  return (
    <ul className="board-menu-nav-list">
      <li className="board-menu-nav-item">
        <span className="board-menu-nav-btn">About This Board</span>
      </li>
      <li className="board-menu-nav-item">
        <span className="board-menu-nav-btn">Change Background</span>
      </li>
      <li className="board-menu-nav-item">
        <span className="board-menu-nav-btn">Search Cards</span>
      </li>
    </ul>
  );
};
export default BoardMenuNavList;