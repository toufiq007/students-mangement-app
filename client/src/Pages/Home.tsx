import CurzonHall from "../assets/images/curzonHall.jpg";

const Home = () => {
  return (
    <div className=" py-5 container mx-auto">
      <h2 className="text-3xl text-center font-bold">
        Welcome to the students management of Hall students in PTEC
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
        <div className="flex flex-col justify-center align-middle bg-blue-500 p-5 h-[500px] cursor-pointer rounded-lg"> 
            <div className="h-[400px] w-full">
            <img className="bg-cover w-[100%] h-[100%] rounded" src={CurzonHall} alt="" />
            </div>
          <h2 className="text-3xl text-center my-4">Fiber Hall</h2>
        </div>
        <div className="flex flex-col justify-center align-middle bg-red-500 p-5 h-[500px] cursor-pointer rounded-lg"> 
            <div className="h-[400px] w-full">
            <img className="bg-cover w-[100%] h-[100%] rounded" src={CurzonHall} alt="" />
            </div>
          <h2 className="text-3xl text-center my-4">Twist Hall</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
