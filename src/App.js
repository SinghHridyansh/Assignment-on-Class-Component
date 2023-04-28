import Counter from "./ClassCounter/ClassCounter";
import LandingPage from "./Netflix-LandingPage/Netflix-LandingPage";
import Home from "./Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="Landingpage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
