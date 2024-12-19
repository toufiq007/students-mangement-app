import { Link, useParams } from "react-router-dom";
import { roomMember } from "../../utils/roomStudentsData";

const Room = () => {
  const { room, hallName } = useParams();
  console.log(room, hallName);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Room Header */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Room Number: {room}
      </h2>

      {/* Room Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roomMember.map((member, index: number) => (
          <Link
            to={`/hall/${hallName}/${room}/${member.id}`}
            key={index}
            className="group"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-yellow-300">
                {member.name}
              </h3>
              <p className="text-lg group-hover:text-gray-200">
                <span className="font-medium">Email:</span> {member.email}
              </p>
              <p className="text-lg group-hover:text-gray-200">
                <span className="font-medium">Batch:</span> {member.batch}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Room;
