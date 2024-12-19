import { useForm } from "react-hook-form";

type StudentFormType = {
  id: string;
  name: string;
  email: string;
  batch: string;
  bloodGroup: string;
  hallName: string;
};

const AddStudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormType>({
    defaultValues: {
      id: "",
      name: "",
      email: "",
      batch: "",
      bloodGroup: "",
      hallName: "",
    },
  });

  const onSubmit = (data: StudentFormType) => {
    console.log(data); // Handle form submission here
    alert("Student data submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Add Student Information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Student ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Student ID
            </label>
            <input
              type="text"
              {...register("id", { required: "Student ID is required" })}
              placeholder="Enter student's ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.id && (
              <p className="text-red-500 text-sm">{errors.id.message}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter student's name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter student's email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Batch */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Batch
            </label>
            <input
              type="text"
              {...register("batch", { required: "Batch is required" })}
              placeholder="Enter student's batch"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.batch && (
              <p className="text-red-500 text-sm">{errors.batch.message}</p>
            )}
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Blood Group
            </label>
            <select
              {...register("bloodGroup", {
                required: "Blood group is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodGroup && (
              <p className="text-red-500 text-sm">
                {errors.bloodGroup.message}
              </p>
            )}
          </div>

          {/* Hall Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Hall Name
            </label>
            <select
              {...register("hallName", { required: "Hall name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select hall</option>
              <option value="Fiber Hall">Fiber Hall</option>
              <option value="Twist Hall">Twist Hall</option>
            </select>
            {errors.hallName && (
              <p className="text-red-500 text-sm">{errors.hallName.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
