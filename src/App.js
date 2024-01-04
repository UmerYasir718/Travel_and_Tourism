import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./mainComponets/Navbar";
import "./App.css";
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
  return <></>;
}

export default App;
