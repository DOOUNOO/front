import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home";
import Signup from "./containers/SignUp";
import UserSignUp from "./containers/UserSignUp";
import ExpertSignup from "./containers/ExpertSignUp";
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
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faStar, faCommentDots, faLightbulb, faMagnifyingGlass);

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token, id) => {
    if (token) {
      // Gestion de cookie
      Cookies.set("userToken", token, { expires: 10 });
      Cookies.set("userId", id, { expires: 10 });
    } else {
      Cookies.remove("userToken");
      Cookies.remove("userId");
    }

    setToken(token);
  };

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route
          path="/signup/expert"
          element={<ExpertSignup setUser={setUser} />}
        />
        <Route path="/signup/user" element={<UserSignUp setUser={setUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/findexperts" element={<FindExperts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
