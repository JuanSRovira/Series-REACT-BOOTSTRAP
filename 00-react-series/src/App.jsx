import RoutesIndex from "./routes/Index";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <RoutesIndex/>
      </BrowserRouter>
    </>
  );
}

export default App;
