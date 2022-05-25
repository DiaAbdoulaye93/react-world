import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;