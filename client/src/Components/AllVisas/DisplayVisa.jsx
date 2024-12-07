/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DisplayVisa = ({ visa }) => {
  const {
    _id: id,
    countryName,
    countryFlag,
    visaType,
    visaFee,
    validatiy,
  } = visa;

  return (
    <div>
      <div className="card bg-[#eff2e6] py-6 px-2 custom-card">
        <figure className="h-16 w-16 mt-8 ml-10">
          <img
            src={countryFlag}
            alt="flag"
            className="w-full h-full object-cover rounded-[50%]"
          />
        </figure>
        <div className="card-body pt-5">
          <h2 className="card-title text-2xl font-bold">
            Country: {countryName}
          </h2>
          <p className="font-semibold text-lg">Visa Type: {visaType}</p>
          <p className="font-semibold text-lg">Validity: {validatiy}</p>
          <p className="font-semibold text-lg">Fee: ${visaFee}</p>
          <p></p>
          <div className="card-actions mt-5">
            <Link to={`/visaDetails/:${id}`} className="w-full">
              <button className="btn w-full hover:bg-[#898d4fbe] text-lg font-bold custom-effect2">
                <span className="z-10">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayVisa;
