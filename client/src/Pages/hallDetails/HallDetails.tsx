import { useParams } from "react-router-dom";
import RoomContainer from "../roomDetails/RoomContainer";

const HallDetails = () => {
  const { hallName } = useParams();
  console.log(hallName);
  return (
    <div>
      <div>
        <h2></h2>
        <RoomContainer hallName={hallName as string} />
      </div>
    </div>
  );
};

export default HallDetails;
