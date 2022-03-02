import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./containers/Home";
import Signup from "./containers/SignUp";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Offer from "./containers/Offer";
import FindExperts from "./containers/FindExperts";
import Payment from "./containers/Payment";
import PageNotFound from "./containers/PageNotFound";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faStar,
  faCommentDots,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faStar, faCommentDots, faLightbulb);

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/findexperts" element={<FindExperts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
