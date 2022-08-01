import React, { useState, useEffect } from "react";
import "../Poll.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HeaderLogo from "./HeaderLogo";
import axios from "axios";
import { BASE_URL } from "./constants";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const navigate = useNavigate();
  let { objectId } = useParams();
  const getData = (objectId) => {
    const token = localStorage.getItem("Token");
    axios
      .get(`https://${BASE_URL}/classes/poll/${objectId}`, {
        headers: {
          "X-Parse-Application-Id": "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

          "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",

          "X-Parse-Session-Token": token,
        },
      })
      .then((response) => {
        setTitle(response.data.title);
        setDiscription(response.data.des);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getData(objectId);
  }, []);

  const editData = () => {
    const token = localStorage.getItem("Token");

    axios
      .put(
        `https://${BASE_URL}/classes/poll/${objectId}`,

        {
          title: title,
          des: description,
        },

        {
          headers: {
            "X-Parse-Application-Id":
              "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

            "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
            "X-Parse-Session-Token": token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate("/poll");
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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            style={{ width: "500px" }}
            id="demo-helper-text-misaligned-no-helper"
            label="Title"
          />
        </Box>
        {/* ))} */}
        <Box style={{ marginLeft: "196px", marginTop: "30px" }}>
          <TextField
            value={description}
            onChange={(e) => setDiscription(e.target.value)}
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
