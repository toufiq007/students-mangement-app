import { Link, useParams } from "react-router-dom";
import { roomMember } from "../../utils/roomStudentsData";

const Room = () => {
    const {room,hallName} = useParams()
    console.log(room,hallName)
  return (
    <div className="container mx-auto">
        <h2 className="text-3xl text-center">Room Number : {room}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
        {roomMember.map((member,index:number) => (
         <Link to={`/hall/${hallName}/${room}/${member.id}`}>
             <div
            key={index}
            className="bg-blue-500 text-white p-5 m-5 rounded-lg h-[200px] flex flex-col justify-center items-center"
          >
            <h2 className="text-3xl text-center">{member.name}</h2>
            <h2 className="text-3xl text-center">{member.email}</h2>
            <h2 className="text-3xl text-center">{member.batch}</h2>
          </div>
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Room;
