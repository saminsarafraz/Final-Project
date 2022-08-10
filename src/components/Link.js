import React, { useState } from "react";
import "../Poll.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import HeaderBack from "./HeaderBack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import copy from "copy-to-clipboard";

const Link = () => {
  let { objectId } = useParams();

  const [copyText, setCopyText] = useState(
    `http://localhost:3000/poll/${objectId}`
  );

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText);
    alert(`You have copied "${copyText}"`);
  };

  return (
    <div className="center">
      <HeaderBack />

      <span style={{ color: "white", marginTop: "60px", fontSize: "22px" }}>
        Get your link!
      </span>
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
            onChange={handleCopyText}
            value={copyText}
            style={{ width: "500px" }}
            id="demo-helper-text-misaligned-no-helper"
            label="Link"
          />
          <ContentCopyIcon
            onClick={() => {
              copyToClipboard();
              alert("copied");
            }}
          />{" "}
        </Box>
      </div>
    </div>
  );
};

export default Link;
