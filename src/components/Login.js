import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../Login.css";
import HeaderBack from "./HeaderBack";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";
import { BASE_URL } from "./constants";

import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username.length === 0 || password.length === 0) {
      setError(true);
    } else {
      axios
        .get(`https://${BASE_URL}/login`, {
          headers: {
            "X-Parse-Application-Id":
              "f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y",

            "X-Parse-REST-API-Key": "ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg",

            "X-Parse-Revocable-Session": "1",
          },
          params: {
            username: username,
            password: password,
          },
        })

        .then((response) => {
          const token = response.data.sessionToken;
          localStorage.setItem("Token", token);
          navigate("/Poll");
        })
        .catch((error) => {
          setError("your username or pass are not correct ");
        });
    }
  };

  return (
    <div>
      <div className="center ">
        {" "}
        <HeaderBack> </HeaderBack>
        <div>
          {" "}
          <p className="p-color">Login please!</p>
        </div>
        <div className="box">
          <div className="center margin-top">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                style={{ width: "400px" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="demo-helper-text-misaligned-no-helper"
                label="Username"
              />
            </Box>
            {error && username.length <= 0 ? (
              <span style={{ color: "red" }}>userName cant be emty</span>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                style={{ width: "400px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            {error && password.length <= 0 ? (
              <span style={{ color: "red" }}>password cant be emty</span>
            ) : (
              ""
            )}
          </div>
          <div className="center">
            <Button
              onClick={login}
              style={{
                width: "400px",
                marginTop: "40px",
                color: "black",
                backgroundColor: "grey",
              }}
              variant="contained"
              disableElevation
            >
              Login
            </Button>
            <p style={{ color: "red" }}>{error}</p>
          </div>{" "}
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="leftpart-footer">
            <span className="bold">Concat us: </span>
            <span>Tell: 0936814770</span>
            <span>021000000</span>
            <span>Email: samin.sarafraz9@gmail.com</span>
          </div>
          <div className="rightpart-footer">
            <span className="bold">Follow us on social networks</span>
            <div className="icons">
              {" "}
              <span style={{ marginTop: "30px", marginLeft: "40px" }}>
                <InstagramIcon />
              </span>
              <span style={{ marginTop: "30px", marginLeft: "20px" }}>
                <LinkedInIcon />
              </span>
              <span style={{ marginTop: "30px", marginLeft: "20px" }}>
                <TwitterIcon />
              </span>{" "}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sign;
