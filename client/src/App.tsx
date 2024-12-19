import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import HallDetails from "./Pages/hallDetails/HallDetails";
import Room from "./Pages/roomDetails/Room";
import Student from "./Pages/studentDetails/Student";
import AddStudentForm from "./components/AddStudent";
import StudentsPage from "./Pages/StudentsPage";
import About from "./Pages/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hall/:hallName" element={<HallDetails />} />
        <Route path="/hall/:hallName/:room" element={<Room />} />
        <Route path="/hall/:hallName/:room/:stuId" element={<Student />} />
        <Route path="/addStudents" element={<AddStudentForm />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
