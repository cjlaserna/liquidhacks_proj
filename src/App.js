import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./layout/NavigationBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
