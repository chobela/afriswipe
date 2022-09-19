import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Apply from "./components/apply";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          {/* <Route path="/households" element={<Households />} />
                    <Route path="/children" element={<Vcas />} />
                    <Route path="/household/:id" element={<Household />} /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
