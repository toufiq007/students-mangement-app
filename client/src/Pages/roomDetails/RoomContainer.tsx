import { Link } from "react-router-dom";

const roomDetails = [
  {
    room: 101,
    title: "Room 101",
  },

  {
    room: 102,
    title: "Room 102",
  },
  {
    room: 103,
    title: "Room 102",
  },
  {
    room: 104,
    title: "Room 104",
  },
  {
    room: 105,
    title: "Room 105",
  },
  {
    room: 106,
    title: "Room 106",
  },
  {
    room: 107,
    title: "Room 107",
  },
  {
    room: 108,
    title: "Room 108",
  },
  {
    room: 109,
    title: "Room 109",
  },
  {
    room: 110,
    title: "Room 110",
  },
];

type RoomContainerProps = {
  hallName: string;
};

const RoomContainer = ({ hallName }: RoomContainerProps) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
      {roomDetails.map((roomDetail) => {
        return (
          <Link to={`/hall/${hallName}/${roomDetail.room}`}>
            <div
              key={roomDetail.room}
              className="bg-blue-500 text-white p-5 m-5 rounded-lg h-[200px] flex justify-center items-center"
            >
              <h2 className="text-3xl text-center">{roomDetail.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RoomContainer;
