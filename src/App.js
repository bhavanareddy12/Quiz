import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Home/Results";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
