import React from "react";
import "../Login.css";
import image from "../logo.png";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const HeaderSign = () => {
  return (
    <div style={{ position: "fixed" }} className="header-design">
      <img className="logo-design" src={image} alt="logo"></img>
      <div className="header-button">
        <Button
          style={{ width: "100px", backgroundColor: "#cc2b5e" }}
          variant="contained"
          disableElevation
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/Login">
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeaderSign;
