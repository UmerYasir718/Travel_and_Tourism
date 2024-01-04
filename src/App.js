import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./mainComponets/Navbar";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />}></Route>
          {/* <Navbar /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
