import { Link } from "react-router-dom";
import CollegeImage from "../assets/images/curzonHall.jpg";  // Replace with your actual image

const Home = () => {
  return (
    <div className="bg-gray-50 py-10 container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Student Management System
        </h1>
        <p className="text-lg text-gray-600">
          Efficiently manage student information at Pabna Textile Engineering College.
        </p>
      </div>

      {/* College Image */}
      <div className="text-center mb-10">
        <img
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          src={CollegeImage}
          alt="Pabna Textile Engineering College"
        />
      </div>

      {/* Key Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold text-center mb-4">Manage Students</h2>
          <p className="text-center text-lg">
            Add, update, and view student records easily.
          </p>
          <div className="mt-4 text-center">
            <Link to="/students" className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
              View Students
            </Link>
          </div>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold text-center mb-4">Add New Student</h2>
          <p className="text-center text-lg">
            Easily add new students to the system.
          </p>
          <div className="mt-4 text-center">
            <Link to="/addStudents" className="bg-white text-green-500 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition duration-300">
              Add Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;