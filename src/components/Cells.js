import React, { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import { BASE_URL } from "./constants";

import Checkbox from "@mui/material/Checkbox";
const Cells = ({ participant }) => {
  const [options, setOptions] = useState([]);
  const [participantChoice, setParticipantChoice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setIsLoading(true);
    const fetchData = async (participantChoice) => {
      try {
        const { data: response } = await axios.get(
          `https://${BASE_URL}/classes/participantChoice/${participantChoice.objectId}`,

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
        setParticipantChoice(response.results);
        console.log(response.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    setIsLoading(false);
    fetchData(participantChoice);
  }, []);

  return (
    <>
      <tabaleCell>{`${participant.first_name}  ${participant.last_name}`}</tabaleCell>
      {options.map(() => (
        <TableCell style={{ marginLeft: "70px" }}>
          {" "}
          <Checkbox />{" "}
        </TableCell>
      ))}
    </>
  );
};

export default Cells;
