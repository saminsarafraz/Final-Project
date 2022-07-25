import React from "react";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Poll from "./components/Poll";
import CreatePoll from "./components/CreatePoll";
import Edit from "./components/Edit";
// import Link from './components/Link';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Poll" element={<Poll />}></Route>

        <Route path="/CreatePoll" element={<CreatePoll />}></Route>

        <Route path="/Edit" element={<Edit />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
