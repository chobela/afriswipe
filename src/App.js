import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Apply from "./components/apply";
import Login from "./components/login";
import Signup from "./components/signup";
import UserContext from "./context/userContext";

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
            {/* <Route path="/households" element={<Households />} />
                    <Route path="/children" element={<Vcas />} />
                    <Route path="/household/:id" element={<Household />} /> */}
          </Routes>
        </>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
