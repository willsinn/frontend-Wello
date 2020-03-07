import React from "react";
import BoardList from "../components/BoardList";
import DelBoardBtn from "../components/DelBoardBtn";

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

const Board = props => {
  console.log(props);
  const renderBoardBg = () => {
    switch (props.workspace.board.background) {
      case "lake":
        return { backgroundImage: `url(${Lake})` };
      case "mountians":
        return { backgroundImage: `url(${Mountians})` };
      case "cityscape":
        return { backgroundImage: `url(${Cityscape})` };
      case "beach":
        return { backgroundImage: `url(${Beach})` };
      case "autumn":
        return { backgroundImage: `url(${Autumn})` };
      case "waterfall":
        return { backgroundImage: `url(${Waterfall})` };
      case "city":
        return { backgroundImage: `url(${City})` };
      case "meadow":
        return { backgroundImage: `url(${Meadow})` };
      case "iceland":
        return { backgroundImage: `url(${Iceland})` };
      default:
        return { backgroundImage: `url(${Iceland})` };
    }
  };
  return (
    <div id="workspace" style={renderBoardBg()}>
      <div className="board-header">
        <div className="board-ops left">
          <div className="board-ops title-top">
            <span
              className="b-name"
              style={{
                paddingLeft: "12px",
                paddingRight: "12px"
              }}
            >
              {props.workspace.title}
            </span>
            <button className="navbar-btn">
              <span className="fav-star-icon icon" />
            </button>
          </div>
        </div>
        <div className="board-ops right">
          <DelBoardBtn workspace={props.workspace} />
        </div>
      </div>
      <BoardList key={props.workspace.id} workspace={props.workspace} />
    </div>
  );
};
const mapStateToProps = ({ userReducer: user }) => ({
  user: user
});
export default connect(mapStateToProps)(Board);
