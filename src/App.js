// import CoomingSoon from "./components/CoomingSoon";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <MainComponent />
      {/* <CoomingSoon /> */}
    </BrowserRouter>
  );
}

export default App;
