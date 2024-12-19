import { useParams } from "react-router-dom";
import { roomMember } from "../../utils/roomStudentsData";
import Avatar from "../../assets/images/avatar.avif";

const Student = () => {
  const { stuId } = useParams();
  const studentData = roomMember.find((student) => student.id === stuId);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Student Details (Fiber Hall)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Avatar Section */}
        <img
          src={Avatar}
          alt="Student Avatar"
          className="w-full h-[500px] rounded-lg shadow-md object-cover"
        />

        {/* Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Hall: <span className="text-blue-600">Fiber Hall</span>
          </h3>
          <div className="space-y-3">
            <p className="text-lg">
              <span className="font-semibold text-gray-700">ID:</span>{" "}
              {studentData?.id || "Not available"}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Name:</span>{" "}
              {studentData?.name || "Not available"}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Blood Group:</span>{" "}
              AB+
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {studentData?.email || "Not available"}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Batch:</span>{" "}
              {studentData?.batch || "Not available"}
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Last Admission:</span>{" "}
              July 5, 2024
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gray-700">Hall Admission Due:</span>{" "}
              <span className="text-red-600 font-semibold">Due</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
