import { useLoaderData } from "react-router-dom";
import PageTitle from "../AddVisa/PageTitle";
import DisplayVisa from "./DisplayVisa";

const AllVisas = () => {
  const data = useLoaderData();
  return (
    <div className="pt-16 bg-[#f9f9f9]">
      <PageTitle
        heading1={"All"}
        heading2={"Visas"}
        subHeading={"All Visas"}
      ></PageTitle>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 px-4 sm:px-20 pt-10 pb-36 rounded-[60px]">
        {data.map((visa) => (
          <DisplayVisa key={visa._id} visa={visa}></DisplayVisa>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
