import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Cells from "./Cells";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PollPage = () => {
  const token = localStorage.getItem("Token");

  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [participants, setParticipans] = useState([]);
  const [participantChoice, setParticipantChoice] = useState([]);

  let { pollId } = useParams();
  useEffect(() => {
    const array = [];
    const token = localStorage.getItem("Token");
    setIsLoading(true);
    const fetchData = async (pollId) => {
      try {
        const { data: response } = await axios.get(
          `https://${BASE_URL}/classes/poll/${pollId}`,

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
        console.log(response.optionsId);

        const optionsId = response.optionsId;
        for (let index = 0; index < optionsId.length; index++) {
          const option = optionsId[index];

          const { data: response } = await axios.get(
            `https://${BASE_URL}/classes/option/${option}`,

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

          array.push(response);
        }

        setOptions(array);

        console.log(array);
      } catch (error) {
        console.error(error.message);
      }
    };
    setIsLoading(false);
    fetchData(pollId);
  }, []);

  const sendParticipantData = () => {
    axios
      .post(
        `https://${BASE_URL}/classes/participant`,

        {
          fullName: fullname,
        },
        {
          headers: {
            "X-Parse-Application-Id":
              "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

            "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",

            "Content-Type": "application/json",

            "X-Parse-Session-Token": token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const id = response.objectId;

        // sendChoice(id);

        console.log("create");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendChoice = () => {
    axios
      .post(
        `https://${BASE_URL}/classes/participantChoice`,

        {
          optionId: participantChoice,
        },
        {
          headers: {
            "X-Parse-Application-Id":
              "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

            "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",

            "Content-Type": "application/json",

            "X-Parse-Session-Token": token,
          },
        }
      )
      .then((response) => {
        console.log("postOption", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckbox = (e, objectId) => {
    const choice = participantChoice.find((c) => c.objectId === objectId);
    if (!choice) {
      setParticipantChoice((prev) =>
        prev.concat({ objectId, value: e.target.checked })
      );
    }
    if (choice) {
      const choiceIndex = participantChoice.findIndex(
        (c) => c.objectId === objectId
      );
      participantChoice[choiceIndex] = { objectId, value: e.target.checked };
      setParticipantChoice(participantChoice);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setIsLoading(true);
    const fetchData = async () => {
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
        setParticipantChoice(response);
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    setIsLoading(false);
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://${BASE_URL}/classes/participant`,

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
        setParticipans(response.results);
        console.log("name", response.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    setIsLoading(false);
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px",
      }}
    >
      <span style={{ color: "white", paddingTop: "50px" }}>
        Vote in Poll please!
      </span>
      <div style={{ marginTop: "80px" }} className="big-box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <input
                    style={{
                      width: "100px",
                      height: "20px",
                      backgroundColor: "black",
                      color: "white",
                      marginTop: "20px",
                      marginLeft: "17px",
                    }}
                    value=" Enter Fullname"
                  />{" "}
                </TableCell>
                {options.map((column, objectId) => (
                  <TableCell
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={objectId}
                    align="left"
                  >
                    {column.option}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {participants.map((participant) => (
                <TableRow>
                  <Cells objectId={participant.objectId} />
                </TableRow>
              ))}

              <TableRow>
                <TableCell>
                  {" "}
                  <input
                    style={{ width: "60px" }}
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                  />{" "}
                </TableCell>

                {options.map((option) => (
                  <TableCell key={option.objectId}>
                    <Checkbox
                      onChange={(e) => handleCheckbox(e, option.objectId)}
                      style={{ marginRight: "70px" }}
                    />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Button
        style={{
          marginTop: "80px",
          width: "200px",
          backgroundColor: "lightgray",
        }}
        type="submit"
        onClick={() => {
          sendParticipantData();
          sendChoice();
        }}
      >
        submit
      </Button>
    </div>
  );
};

export default PollPage;
