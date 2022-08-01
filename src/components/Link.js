import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Poll.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import HeaderBack from "./HeaderBack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { BASE_URL } from "./constants";

const Link = () => {
  const [link, setLink] = useState([]);

  let { objectId } = useParams();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    const fetchData = async (objectId) => {
      try {
        const { data: response } = await axios.get(
          `https://${BASE_URL}/classes/poll/${objectId}`,
          {
            headers: {
              "X-Parse-Application-Id":
                "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

              "X-Parse-REST-API-Key":
                "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
              "X-Parse-Session-Token": token,
            },
            params: { link: link },
          }
        );
        setLink(Link);
        console.log(response.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [link]);

  return (
    <div className="center">
      <HeaderBack />

      <span style={{ color: "white", marginTop: "30px" }}>Get your link!</span>
      <div className="Link-box">
        <Box
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
            value={objectId}
            style={{ width: "500px" }}
            id="demo-helper-text-misaligned-no-helper"
            label="Title"
          />
          <ContentCopyIcon
            onClick={() => {
              navigator.clipboard.writeText(TextField.value);
              alert("copied");
            }}
          />{" "}
        </Box>
      </div>
    </div>
  );
};

export default Link;
