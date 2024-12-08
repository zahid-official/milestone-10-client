import { FaAward, FaThumbsUp, FaUsers } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import about1 from "/assets/about-1.jpg";
import about2 from "/assets/about-2.jpg";
import about3 from "/assets/about-3.jpg";
import about4 from "/assets/about-4.jpg";

const AboutUs = () => {
  return (
    <div className="pt-36 w-11/12 mx-auto flex xl:flex-row sm:flex-col flex-col-reverse gap-10">
      {/* left  */}
      <div className="flex-1 flex justify-center items-center">
      <div className=" flex flex-col sm:gap-3 gap-10">
        <div className="flex sm:flex-row flex-col sm:gap-3 gap-10">
          <img src={about1} alt="" className="sm:rounded-t-full sm:rounded-bl-full rounded-2xl" />
          <img src={about2} alt="" className="sm:rounded-t-full sm:rounded-br-full rounded-2xl" />
        </div>
        <div className="flex  sm:flex-row flex-col sm:gap-3 gap-10">
          <img src={about4} alt="" className="sm:rounded-b-full sm:rounded-tl-full rounded-2xl" />
          <img src={about3} alt="" className="sm:rounded-b-full sm:rounded-tr-full rounded-2xl" />
        </div>
      </div>
      </div>

      {/* right */}
      <div className="flex-1 text-center">
        <h4 className="bg-[#ecf6ea] inline-block px-5 py-2 rounded-badge text-[#45a735] font-bold border-2 border-[#badeb3]">
          About Us
        </h4>

        <h2 className="sm:text-5xl text-3xl font-bold my-5 ">
          The most loved Agency
        </h2>
        <p>
          Voted the Fastest Solution to Implement and the Easiest to Administer
          for Visa Applications
        </p>

        <div className="flex justify-center items-center flex-col gap-10 mt-16">
          {/* first line */}
          <div className="flex justify-center items-center w-9/12 sm:flex-row flex-col gap-4">
            <div className="shadow-xl bg-[#f9f9f99f] flex justify-center gap-3 py-5 rounded-xl sm:w-72 w-full">
              <div className="bg-[#45a735] h-16 w-16 flex justify-center items-center rounded-full p-1">
                <FaAward size={35} color="white"></FaAward>
              </div>

              <div>
                <h2 className="font-bold text-xl ">Easiest Apply</h2>
                <p className="font-semibold text-lg">Fall 2023</p>
              </div>
            </div>

            <div className="shadow-xl bg-[#f9f9f99f] flex justify-center gap-3 py-5 rounded-xl sm:w-64 w-full">
              <div className="bg-[#45a735] h-16 w-16 flex justify-center items-center rounded-full p-1">
                <FaThumbsUp size={30} color="white"></FaThumbsUp>
              </div>

              <div>
                <h2 className="font-bold text-xl ">Users love Us</h2>
                <p className="font-semibold text-lg">Winter 2023</p>
              </div>
            </div>
          </div>

          {/* second line */}
          <div className="flex justify-center items-center w-9/12 sm:flex-row flex-col gap-4">
            <div className="shadow-xl bg-[#f9f9f99f] flex justify-center gap-3 py-5 rounded-xl sm:w-64 w-full">
              <div className="bg-[#45a735] h-16 w-16 flex justify-center items-center rounded-full p-1">
                <MdLeaderboard size={35} color="white"></MdLeaderboard>
              </div>

              <div>
                <h2 className="font-bold text-xl ">Leader</h2>
                <p className="font-semibold text-lg">Summer 2024</p>
              </div>
            </div>

            <div className="shadow-xl bg-[#f9f9f99f] flex justify-center gap-3 py-5 rounded-xl sm:w-64 w-full">
              <div className="bg-[#45a735] h-16 w-16 flex justify-center items-center rounded-full p-1">
                <FaUsers size={30} color="white"></FaUsers>
              </div>

              <div>
                <h2 className="font-bold text-xl ">Best support</h2>
                <p className="font-semibold text-lg">Spring 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
