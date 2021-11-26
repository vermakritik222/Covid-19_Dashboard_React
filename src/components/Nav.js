import { ButtonBase, IconButton } from "@material-ui/core";
import {
  AccountBox,
  DashboardOutlined,
  Help,
  Home,
  PlayCircleFilled,
  PlaylistPlay,
  Settings,
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
    if (e.target.type === "button") {
      e.target.style.backgroundColor = "#fc312f7a";
    } else {
      if (e.target.localName === "path") {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0)";
      } else if (e.target.classList[1] === "nav__icon") {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0)";
      } else if (e.target.localName === "svg") {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0)";
      }
      e.relatedTarget.style.backgroundColor = "#fc312f7a";
      console.log(
        e.target.classList[1] === "nav__icon",
        e.target,
        e.target.localName === "path"
      );
    }
  };

  const mouseOut = (e) => {
    if (e.target.type === "button") {
      e.target.style.backgroundColor = "";
    } else {
      if (e.target.localName === "path") {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0)";
      } else if (e.target.classList[1] === "nav__icon") {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0)";
      } else if (e.target.localName === "svg") {
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0)";
      }
      e.relatedTarget.style.backgroundColor = "";
    }
  };
  return (
    <div className="nav">
      <div className="nav__upper">
        <div className="nav__logo">
          <PlayCircleFilled
            color="error"
            style={{ fontSize: "40px", cursor: "pointer" }}
          />
        </div>
        <div className="nav__items">
          <div className="nav__itemBox">
            <ButtonBase
              startIcon={<Home />}
              style={btnStyle}
              className="nav__btns"
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <Home className="nav__icon" />
              <h6 className="nav__BoxContent">Home</h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              className="nav__btns"
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <DashboardOutlined className="nav__icon" />
              <h6 className="nav__BoxContent">Tracker </h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              className="nav__btns"
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <AccountBox className="nav__icon" />
              <h6 className="nav__BoxContent">About Us</h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              className="nav__btns"
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <Help className="nav__icon" />
              <h6 className="nav__BoxContent">Help</h6>
            </ButtonBase>
          </div>
          <div className="nav__itemBox">
            <ButtonBase
              style={btnStyle}
              className="nav__btns"
              onMouseOver={(e) => mouseOver(e)}
              onMouseOut={(e) => mouseOut(e)}
            >
              <Settings className="nav__icon" />
              <h6 className="nav__BoxContent">Settings</h6>
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
