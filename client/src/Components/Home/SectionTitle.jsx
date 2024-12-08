/* eslint-disable react/prop-types */
import { Slide } from "react-awesome-reveal";
const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center my-32">
      <h4 className="bg-[#ecf6ea] inline-block px-5 py-2 rounded-badge text-[#45a735] font-bold border-2 border-[#badeb3]">
        {subHeading}
      </h4>
      <Slide>
        <h2 className="sm:text-5xl text-3xl font-bold mt-5">{heading}</h2>
      </Slide>
    </div>
  );
};

export default SectionTitle;
