import React from "react";
import "../Login.css";
import image from "../logo.png";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const HeaderBack = () => {
  return (
    <div className="header-design">
      <img className="logo-design" src={image} alt="logo"></img>
      <div className="header-button">
        <Stack direction="row" spacing={2}>
          <Button
            style={{ backgroundColor: "#cc2b5e", color: "black" }}
            variant="contained"
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Back
            </Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default HeaderBack;
