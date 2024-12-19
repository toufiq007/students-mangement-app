import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import HallDetails from "./Pages/hallDetails/HallDetails";
import Room from "./Pages/roomDetails/Room";
import Student from "./Pages/studentDetails/Student";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hall/:hallName" element={<HallDetails/>} />
        <Route path="/hall/:hallName/:room" element={<Room/>} />
        <Route path="/hall/:hallName/:room/:stuId" element={<Student/>} />
        
      </Routes>
    </>
  );
}

export default App;
