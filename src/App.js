import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home";
import Signup from "./containers/SignUp";
import UserSignUp from "./containers/UserSignUp/UserSignUp";
import ExpertSignup from "./containers/ExpertSignUp/ExpertSignUp";
import Publish from "./containers/Publish";
import FindExpert from "./containers/FindExpert";
import FindExperts from "./containers/FindExperts";
import Payment from "./containers/Payment";
import PageNotFound from "./containers/PageNotFound";
import Account from "./containers/Account";
import ScrollToTop from "./components/ScrollToTop";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faStar,
  faCommentDots,
  faLightbulb,
  faMagnifyingGlass,
  faCheckCircle,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faCloudUpload,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faUser,
  faStar,
  faCommentDots,
  faLightbulb,
  faMagnifyingGlass,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faCheckCircle,
  faCloudUpload
);

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
      setToken(null);
    }

    setToken(token);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header token={token} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route
          path="/signup/expert"
          element={<ExpertSignup setUser={setUser} />}
        />
        <Route path="/signup/user" element={<UserSignUp setUser={setUser} />} />
        <Route
          path="/account/:id"
          element={<Account setUser={setUser} token={token} />}
        />
        <Route path="/publish" element={<Publish />} />
        <Route
          path="/findexpert/:id"
          element={<FindExpert token={token} setUser={setUser} />}
        />
        <Route path="/findexperts/:category" element={<FindExperts />} />
        <Route path="/findexperts" element={<FindExperts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
