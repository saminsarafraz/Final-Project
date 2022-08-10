import React, { useState } from "react";
import HeaderLogo from "./HeaderLogo";
import "../Poll.css";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./constants";

const CreatePoll = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState([]);
  const [createOption, setCreateOption] = useState([{}, {}]);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const createLink = (objectId) => {
    return `/Link/${objectId}`;
  };
  const createPollPage = (objectId) => {
    return `/poll/${objectId}`;
  };

  const token = localStorage.getItem("Token");
  const Create = async () => {
    if (title.length === 0) {
      setError(true);
    } else {
      try {
        const array = await postoption();
        const { data: response } = await axios.post(
          `https://${BASE_URL}/classes/poll`,

          {
            title: title,
            des: description,
            optionsId: array,
          },
          {
            headers: {
              "X-Parse-Application-Id":
                "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

              "X-Parse-REST-API-Key":
                "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",

              "Content-Type": "application/json",

              "X-Parse-Session-Token": token,
            },
          }
        );

        console.log(response);

        const id = response.objectId;
        const uniqueLink = createLink(id);
        setLink(uniqueLink);
        navigate(uniqueLink);
        createPollPage(id);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }
  };

  const saveOptions = (e, objectId) => {
    const data = options;
    data[objectId] = e.target.value;
    setOptions(data);
  };

  const postoption = async () => {
    const array = [];
    for (let index = 0; index < options.length; index++) {
      const option = options[index];
      try {
        const { data: response } = await axios.post(
          `https://${BASE_URL}/classes/option`,

          {
            option: option,
          },
          {
            headers: {
              "X-Parse-Application-Id":
                "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

              "X-Parse-REST-API-Key":
                "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",

              "Content-Type": "application/json",

              "X-Parse-Session-Token": token,
            },
          }
        );
        console.log(response);
        array.push(response.objectId);
      } catch (err) {
        console.log(err);
      }
    }
    return array;
  };

  const newInput = () => {
    setCreateOption([
      ...createOption,
      {
        option: "",
      },
    ]);
  };

  const DeletInput = (i) => {
    let newOption = [...createOption];
    newOption.splice(i, 1);
    setCreateOption(newOption);
  };

  // const routeChange = (objectId) => {
  //   let path = `/Link/${objectId}`;
  //   navigate(path);
  // };

  return (
    <div className="center">
      <HeaderLogo />
      <span style={{ color: "white", marginTop: "30px", fontSize: "22px" }}>
        Create poll !
      </span>
      <div className="big-box ">
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
            style={{ width: "500px" }}
            id="demo-helper-text-misaligned-no-helper"
            label="Title"
          />
        </Box>
        {error && title.length <= 0 ? (
          <span className="center" style={{ color: "red" }}>
            title cant be emty
          </span>
        ) : (
          ""
        )}
        <Box style={{ marginLeft: "196px", marginTop: "30px" }}>
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "500px" }}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
          />
        </Box>

        {createOption.map((index, objectId) => (
          <Box
            key={objectId}
            style={{ marginLeft: "190px", marginTop: "30px" }}
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              onChange={(e) => saveOptions(e, objectId)}
              style={{ width: "500px" }}
              id="demo-helper-text-misaligned-no-helper"
              label="option"
            />
            <DeleteForeverIcon onClick={DeletInput} />
          </Box>
        ))}

        <AddCircleIcon
          onClick={newInput}
          style={{ marginLeft: "190px", marginTop: "20px" }}
        />

        <div className="center">
          <Button
            onClick={() => {
              Create();
            }}
            style={{
              width: "500px",
              marginTop: "40px",
              color: "black",
              backgroundColor: "grey",
            }}
            variant="contained"
            disableElevation
          >
            Create
          </Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
export default CreatePoll;
