import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./mainComponets/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
