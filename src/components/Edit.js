import React, { useState, useEffect } from "react";
import "../Poll.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeaderLogo from "./HeaderLogo";
import axios from "axios";
const Edit = () => {
  // const [data, setData] = useState([]);
  const [title, setTitle] = useState();

  const getData = (objectId) => {
    const token = localStorage.getItem("Token");
    axios
      .get(`https://parseapi.back4app.com/Poll/classes/${objectId}`, {
        headers: {
          "X-Parse-Application-Id": "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

          "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
          "X-Parse-Session-Token": token,
        },
        params: {
          title: title,
        },
      })
      .then((response) => {
        // setData(response);
        setTitle(response.title);
        console.log(response.title);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getData();
  });

  const editData = (objectId) => {
    const token = localStorage.getItem("Token");
    axios
      .update(`https://parseapi.back4app.com/classes/Poll/${objectId}`, {
        headers: {
          "X-Parse-Application-Id": "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

          "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
          "X-Parse-Session-Token": token,
          "content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="center">
      <HeaderLogo />

      <span style={{ color: "white", marginTop: "30px" }}>Edit !</span>
      <div className="big-box ">
        {/* {data.map((row, objectId) => ( */}
        <Box
          style={{ marginLeft: "190px", marginTop: "30px" }}
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            value={title}
            style={{ width: "500px" }}
            id="demo-helper-text-misaligned-no-helper"
            label="Title"
          />
        </Box>
        {/* ))} */}
        <Box style={{ marginLeft: "196px", marginTop: "30px" }}>
          <TextField
            style={{ width: "500px" }}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
          />
        </Box>

        <div className="center">
          <Button
            onClick={editData}
            style={{
              width: "500px",
              marginTop: "40px",
              color: "black",
              backgroundColor: "grey",
            }}
            variant="contained"
            disableElevation
          >
            Save
          </Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
export default Edit;
