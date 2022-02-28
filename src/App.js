import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Home from "./containers/Home";
import Signup from "./containers/SignUp"
import Login from "./containers/Login"
import Publish from "./containers/Publish"
import Offer from "./containers/Offer"
import Payment from "./containers/Payment"
import PageNotFound from "./containers/PageNotFound"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
