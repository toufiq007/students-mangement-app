import { Link } from "react-router-dom";
import CurzonHall from "../assets/images/curzonHall.jpg";

const Home = () => {
  return (
    <div className="py-10 container mx-auto px-4">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-12">
        Welcome to the Hall Students Management System at PTEC
      </h1>

      {/* Hall Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Fiber Hall */}
        <Link
          to="/hall/fiber"
          className="group bg-gradient-to-r h-[550px] from-blue-500 to-indigo-500 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative w-full h-full">
            <img
              src={CurzonHall}
              alt="Fiber Hall"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-4xl font-bold text-white text-center">
                Fiber Hall
              </h2>
            </div>
          </div>
        </Link>

        {/* Twist Hall */}
        <Link
          to="/hall/twist"
          className="group bg-gradient-to-r h-[550px] from-red-500 to-pink-500 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative w-full h-full">
            <img
              src={CurzonHall}
              alt="Twist Hall"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-4xl font-bold text-white text-center">
                Twist Hall
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
