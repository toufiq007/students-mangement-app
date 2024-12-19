import { Link } from "react-router-dom";

const roomDetails = [
  { room: 101, title: "Room 101" },
  { room: 102, title: "Room 102" },
  { room: 103, title: "Room 103" },
  { room: 104, title: "Room 104" },
  { room: 105, title: "Room 105" },
  { room: 106, title: "Room 106" },
  { room: 107, title: "Room 107" },
  { room: 108, title: "Room 108" },
  { room: 109, title: "Room 109" },
  { room: 110, title: "Room 110" },
];

type RoomContainerProps = {
  hallName: string;
};

const RoomContainer = ({ hallName }: RoomContainerProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Rooms in {hallName}
      </h2>

      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {roomDetails.map((roomDetail) => (
          <Link
            to={`/hall/${hallName}/${roomDetail.room}`}
            key={roomDetail.room}
            className="group"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-center group-hover:text-yellow-300">
                {roomDetail.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoomContainer;
