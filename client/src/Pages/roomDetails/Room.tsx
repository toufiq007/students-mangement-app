import { useParams } from "react-router-dom";

const roomMember = [
  {
    id: "p202023023",
    name: "Rifad Mahbub Rian",
    email: "rifad@gmail.com",
    batch: "14th",
  },

  {
    id: "p202013010",
    name: "AK Abdullah Shadhin",
    email: "shadin@gmail.com",
    batch: "14th",
  },
  {
    id: "p20201309",
    name: "Mahidul Islam Milon",
    email: "milon@gmail.com",
    batch: "14th",
  },
  {
    id: "p202023023",
    name: "Shuhanur Rahman Milon",
    email: "shohan@gmail.com",
    batch: "14th",
  },
];

const Room = () => {
    const {room,hallName} = useParams()
    console.log(room,hallName)
  return (
    <div className="container mx-auto">
        <h2 className="text-3xl text-center">Room Number : {room}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-10">
        {roomMember.map((member,index:number) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-5 m-5 rounded-lg h-[200px] flex flex-col justify-center items-center"
          >
            <h2 className="text-3xl text-center">{member.name}</h2>
            <h2 className="text-3xl text-center">{member.email}</h2>
            <h2 className="text-3xl text-center">{member.batch}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
