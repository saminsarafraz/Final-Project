import React, { useEffect, useState } from "react";
import HeaderCreate from "./HeaderCreate";
import "../Poll.css";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const Poll = () => {
  const [data, setData] = useState([]);
  const [Delete, setDelete] = useState([]);

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

  const deletePoll = (objectId) => {
    const token = localStorage.getItem("Token");
    axios
      .delete(`https://parseapi.back4app.com/classes/poll/${objectId}`, {
        headers: {
          "X-Parse-Application-Id": "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

          "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",
          "X-Parse-Session-Token": token,
          "content-type": "application/json",
        },
      })
      .then((response) => {
        const del = Delete.filter((row) => objectId !== row.objectId);
        setDelete(del);

        console.log(response.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  let navigate = useNavigate();
  const routeChange = (objectId) => {
    let path = `/Edit/${objectId}`;
    navigate(path);
  };

  return (
    <div className="center">
      <HeaderCreate />

      <span style={{ color: "white", marginTop: "30px" }}>
        Build your poll!
      </span>
      <div className="big-box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Title</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="right">Num Of Participant</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, objectId) => (
                <TableRow
                  key={objectId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="right">{row.des}</TableCell>
                  <TableCell align="right">{row.createdAt}</TableCell>
                  <TableCell align="right">
                    <DeleteForeverIcon onClick={() => deletePoll(objectId)} />
                  </TableCell>
                  <TableCell align="right">
                    <EditIcon onClick={() => routeChange(objectId)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Poll;
