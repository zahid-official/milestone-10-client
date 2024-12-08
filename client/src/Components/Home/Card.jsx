/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({card}) => {

    const {
        _id: id,
        countryName,
        countryFlag,
        visaType,
        visaFee,
        validatiy,
        processingTime,
        applicationMethod,
      } = card;
    
    return (
        <div className="h-full">
      <div className="card bg-[#eff2e6] mx-auto pt-5 pb-16 px-2 custom-card h-full">
        <div>
          <div className="h-16 w-16 mt-8 ml-10">
            <img
              src={countryFlag}
              alt="flag"
              className="w-full h-full object-cover rounded-[50%]"
            />
          </div>
        </div>
        <div className="pt-5 flex flex-col justify-between px-5 h-full">
          <div>
            <h2 className="card-title text-2xl font-bold">{countryName}</h2>
            <p className="font-semibold text-lg">Type: {visaType}</p>
            <p className="font-semibold text-lg">Fee: ${visaFee}</p>
            <br />
            <p className="font-semibold text-lg">Validity: {validatiy}</p>
            <p className="font-semibold text-lg">Processing Time: {processingTime}</p>
            <p className="font-semibold text-lg">Application Method: {applicationMethod}</p>
          </div>
          <div className="card-actions mt-5">
            <Link to={`/visaDetails/${id}`} className="w-full">
              <button className="btn w-full hover:bg-[#898d4fbe] text-lg font-bold custom-effect2">
                <span className="z-10">See Details</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Card;