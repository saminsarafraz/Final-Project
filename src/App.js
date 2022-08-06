import React from "react";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Poll from "./components/Poll";
import CreatePoll from "./components/CreatePoll";
import PollPage from "./components/PollPage";
import Edit from "./components/Edit";
import Link from "./components/Link";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Poll" element={<Poll />}></Route>

        <Route path="/CreatePoll" element={<CreatePoll />}></Route>

        <Route path="/Edit/:objectId" element={<Edit />}></Route>

        <Route path="/Link/:objectId" element={<Link />}></Route>
        <Route path="/poll/:objectId" element={<PollPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
