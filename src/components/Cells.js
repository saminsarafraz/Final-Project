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

    const fetchData = async (participant) => {
      if (participant) {
        console.log("if");
        try {
          const { data: response } = await axios.get(
            `https://${BASE_URL}/classes/participantChoice`,

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
          console.log("cells", response);
          setOptions(response);
        } catch (error) {
          console.error(error.message);
        }
      }
    };

    setIsLoading(false);
    fetchData(participant);
  }, []);

  return (
    <>
      <TableCell>{`${participant ? participant.fullName : ""} `}</TableCell>
      {options.map((option) => (
        <TableCell>
          {" "}
          <Checkbox />{" "}
        </TableCell>
      ))}
    </>
  );
};

export default Cells;
