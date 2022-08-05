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
    const token = localStorage.getItem("Token");
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://${BASE_URL}/classes/option`,

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
        setOptions(response.results);
        console.log(response.option);
      } catch (error) {
        console.error(error.message);
      }
    };
    setIsLoading(false);
    fetchData();
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
        sendChoice(id);

        console.log("create");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendChoice = (id) => {
    axios
      .post(
        `https://${BASE_URL}/classes/participantChoice`,

        {
          participantId: id,
          // optionId: options,
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   setIsLoading(true);
  //   const fetchData = async () => {
  //     try {
  //       const { data: response } = await axios.get(
  //         `https://${BASE_URL}/classes/participantChoise`,

  //         {
  //           headers: {
  //             "X-Parse-Application-Id":
  //               "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

  //             "X-Parse-REST-API-Key":
  //               "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
  //             "X-Parse-Session-Token": token,
  //           },
  //         }
  //       );
  //       setParticipantChoice(response.results);
  //       console.log(response.results);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   setIsLoading(false);
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   setIsLoading(true);
  //   const fetchData = async () => {
  //     try {
  //       const { data: response } = await axios.get(
  //         `https://${BASE_URL}/classes/participant`,

  //         {
  //           headers: {
  //             "X-Parse-Application-Id":
  //               "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

  //             "X-Parse-REST-API-Key":
  //               "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
  //             "X-Parse-Session-Token": token,
  //           },
  //         }
  //       );
  //       setParticipans(response.results);
  //       console.log(response.results);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   setIsLoading(false);
  //   fetchData();
  // }, []);

  console.log(participants);
  return (
    <div>
      <span style={{ color: "white", marginTop: "30px" }}>
        Vote in Poll please!
      </span>
      <div className="big-box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {options.map((column, pollId) => (
                  <TableCell
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={pollId}
                    align="right"
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
                    <Checkbox style={{ marginRight: "70px" }} />
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
      <button
        type="submit"
        onClick={() => {
          sendParticipantData();
          sendChoice();
          // sendChoice();
        }}
      >
        submit
      </button>
    </div>
  );
};

export default PollPage;
