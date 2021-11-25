import { ButtonBase, IconButton } from "@material-ui/core";
import {
  DashboardOutlined,
  PlayCircleFilled,
  PlaylistPlay,
} from "@material-ui/icons";
import React from "react";
import "./sass/Nav.scss";

function Nav() {
  const btnStyle = {
    padding: "10px",
    flexDirection: "column",
    color: "#fc312f",
    width: "75px",
    // backgroundColor: "#fc312f",
    margin: "5px 0px",
    borderRadius: "12px",
    zIndex: "999",
  };
  const mouseOver = function (e) {
    e.target.style.backgroundColor = "#fc312f7a";
  };
  const mouseOut = (e) => {
    e.target.style.backgroundColor = "";
  };
  return (
    <div className="nav">
      <div className="nav__upper">
        <div className="nav__logo">
          <PlayCircleFilled />
        </div>
        <div className="nav__items">
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <DashboardOutlined className="nav__icon" />
              <h6 className="nav__BoxContent"> COVID </h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <DashboardOutlined className="nav__icon" />
              <h6 className="nav__BoxContent">Track COVID </h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <DashboardOutlined className="nav__icon" />
              <h6 className="nav__BoxContent">Track COVID </h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <DashboardOutlined className="nav__icon" />
              <h6 className="nav__BoxContent">Track COVID </h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <DashboardOutlined className="nav__icon" />
              <h6 className="nav__BoxContent">Track COVID </h6>
            </ButtonBase>
          </div>
        </div>
      </div>
      <div className="nav__footer">
        <IconButton color="primary">
          <PlaylistPlay />
        </IconButton>
      </div>
    </div>
  );
}

export default Nav;
