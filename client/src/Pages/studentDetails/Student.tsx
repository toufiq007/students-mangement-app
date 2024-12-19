import { useParams } from "react-router-dom";
import { roomMember } from "../../utils/roomStudentsData";

const Student = () => {
  const { stuId } = useParams();
  const studendData = roomMember.find((student) => student.id === stuId);
  console.log(studendData);
  return (
    <div>
      <h2>this is the student details page</h2>
    </div>
  );
};

export default Student;
