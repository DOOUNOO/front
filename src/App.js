import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home";
import Signup from "./containers/SignUp";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Offer from "./containers/Offer";
import Payment from "./containers/Payment";
import PageNotFound from "./containers/PageNotFound";
library.add(faMagnifyingGlass);

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
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
