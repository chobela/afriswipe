import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Apply from "./components/apply";
import Login from "./components/login";
import Signup from "./components/signup";
import UserContext from "./context/userContext";
import Applications from "./components/applications";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
