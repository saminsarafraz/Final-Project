import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Poll.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import HeaderBack from "./HeaderBack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Link = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://parseapi.back4app.com/classes/poll",

          {
            headers: {
              "X-Parse-Application-Id":
                "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

              "X-Parse-REST-API-Key":
                "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
              "X-Parse-Session-Token": token,
            },
          }
        );
        setData(response.results);
        console.log(response.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="center">
      <HeaderBack />

      <span style={{ color: "white", marginTop: "30px" }}>Get your link!</span>
      <div className="Link-box">
        {data.map((item, objectId) => (
          <Box
            key={objectId}
            style={{ marginTop: "50px" }}
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              Link: <br></br>{" "}
            </span>{" "}
            <TextField
              value={item.link}
              style={{ width: "500px" }}
              id="demo-helper-text-misaligned-no-helper"
              label="Title"
            />
            <ContentCopyIcon />{" "}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Link;
