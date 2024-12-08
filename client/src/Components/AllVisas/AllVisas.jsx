import { useLoaderData } from "react-router-dom";
import PageTitle from "../AddVisa/PageTitle";
import DisplayVisa from "./DisplayVisa";
import { useState } from "react";

const AllVisas = () => {
  const data = useLoaderData();

  // state for filter
  const [filteredData, setFilteredData] = useState(data);

  // handleFilter
  const handleFilter = (visaType) => {
    fetch(`http://localhost:3000/filters/${visaType}`)
    .then(res => res.json())
    .then(data => setFilteredData(data))
  };

  return (
    <div className="pt-16 bg-[#f9f9f9] relative">
      {/* dropdown */}
      <details className="dropdown absolute top-8 left-16">
        <summary className="btn m-1 text-lg font-bold">Filter by Visa Type</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-3 space-y-3 shadow">
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Tourist Visa")}
            >
              Tourist Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Student Visa")}
            >
              Student Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Medical Visa")}
            >
              Medical Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Official Visa")}
            >
              Official Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Conference Visa")}
            >
              Conference Visa
            </button>
          </li>
        </ul>
      </details>

      <PageTitle
        heading1={"All"}
        heading2={"Visas"}
        subHeading={"All Visas"}
      ></PageTitle>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 px-4 sm:px-20 pt-10 pb-36 rounded-[60px]">
        {filteredData.map((visa) => (
          <DisplayVisa key={visa._id} visa={visa}></DisplayVisa>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
