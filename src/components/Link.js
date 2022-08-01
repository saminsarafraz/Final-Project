import React from "react";
import "../Poll.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import HeaderBack from "./HeaderBack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Link = () => {
  let { objectId } = useParams();
  const handleClick = () => navigator.clipboard.writeText(window.location);
  return (
    <div className="center">
      <HeaderBack />

      <span style={{ color: "white", marginTop: "60px" }}>Get your link!</span>
      <div className="Link-box">
        <Box
          style={{ marginTop: "60px", marginLeft: "30px" }}
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            value={`http://localhost:3000/poll/${objectId}`}
            style={{ width: "500px" }}
            id="demo-helper-text-misaligned-no-helper"
            label="Link"
          />
          <ContentCopyIcon
            onClick={() => {
              handleClick();
              alert("copied");
            }}
          />{" "}
        </Box>
      </div>
    </div>
  );
};

export default Link;
