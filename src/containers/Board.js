import React, { useState } from "react";
import CardList from "../components/CardList";
import BoardMenu from "./BoardMenu";

import Lake from "../images/lake.jpg";
import Mountians from "../images/mountians.jpg";
import Cityscape from "../images/cityscape.jpg";
import City from "../images/city.jpeg";
import Iceland from "../images/iceland.jpg";
import Meadow from "../images/meadow.jpg";
import Waterfall from "../images/waterfall.jpeg";
import Beach from "../images/beach.jpg";
import Autumn from "../images/autumn.jpg";

import { connect } from "react-redux";
import { updateBoardBackground, starredBoard } from "../actions/boards";

const bgs = [
  "iceland",
  "lake",
  "mountians",
  "cityscape",
  "beach",
  "autumn",
  "waterfall",
  "city",
  "meadow",
];
const Board = ({ workspace, dispatch }) => {
  const [background, setBackground] = useState("");

  const renderBoardBg = () => {
    if (background === "") {
      return findBg(workspace.background);
    } else {
      return findBg(background);
    }
  };
  const changeBackground = (bgOption) => {
    dispatch(updateBoardBackground(workspace, bgOption));
    setBackground(bgOption);
  };
  const bgOptions = bgs.filter((bg) => bg !== workspace.background);

  const findBg = (bgKey) => {
    switch (bgKey) {
      case "lake":
        return {
          backgroundImage: `url(${Lake})`,
        };
      case "mountians":
        return {
          backgroundImage: `url(${Mountians})`,
        };
      case "cityscape":
        return {
          backgroundImage: `url(${Cityscape})`,
        };
      case "beach":
        return {
          backgroundImage: `url(${Beach})`,
        };
      case "autumn":
        return {
          backgroundImage: `url(${Autumn})`,
        };
      case "waterfall":
        return {
          backgroundImage: `url(${Waterfall})`,
        };
      case "city":
        return {
          backgroundImage: `url(${City})`,
        };
      case "meadow":
        return {
          backgroundImage: `url(${Meadow})`,
        };
      case "iceland":
        return {
          backgroundImage: `url(${Iceland})`,
        };
      default:
        return;
    }
  };

  return (
    <div id="board" style={renderBoardBg()}>
      <div className="board-header-wrap">
        <div className="board-header">
          <div className="board-ops left">
            <div className="board-ops title-top">
              <span
                className="b-name"
                style={{
                  paddingLeft: "12px",
                  paddingRight: "12px",
                }}
              >
                {workspace.title}
              </span>
              <button className="navbar-btn">
                {workspace.starred ? (
                  <span>★</span>
                ) : (
                  <span onClick={(e) => dispatch(starredBoard(workspace))}>
                    ☆
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="board-ops right">
            <BoardMenu
              workspace={workspace}
              findBg={findBg}
              bgOptions={bgOptions}
              changeBackground={changeBackground}
            />
          </div>
        </div>
      </div>
      <div className="board-body">
        <CardList key={workspace.id} workspace={workspace} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user,
});
export default connect(mapStateToProps)(Board);
