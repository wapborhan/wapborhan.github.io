import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="*" element={<MainComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
