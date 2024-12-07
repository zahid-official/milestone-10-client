import { useLoaderData } from "react-router-dom";
import PageTitle from "../AddVisa/PageTitle";

const VisaDetails = () => {
  const data = useLoaderData();
  const {
    countryFlag,
    countryName,
    visaType,
    processingTime,
    visaFee,
    validatiy,
    applicationMethod,
    ageRestriction,
    requiredDocuments,
    description,
  } = data;
  return (
    <div className="bg-[#f9f9f9] pt-16 pb-36">
      <PageTitle
        heading1={"Visa"}
        heading2={"Details"}
        subHeading={"Visa Details"}
      ></PageTitle>

      {/* details */}
      <div>
        <div className="hero bg-white xl:w-10/12 w-11/12 mx-auto sm:py-28 py-14 rounded-3xl">
          <div className="hero-content gap-10 flex-col lg:flex-row w-full">
            <div className="flex-1 flex justify-center">
              <img src={countryFlag} className="sm:max-w-sm" />
            </div>

            <div className="flex-1 px-4 space-y-1.5">
              <div className="space-y-2">
                <h1 className="sm:text-5xl text-4xl font-bold">{countryName}</h1>
                <p className="font-semibold sm:text-xl">Visa Type: {visaType}</p>
                <p className="font-semibold sm:text-lg">Fee: ${visaFee}</p>
              </div>

              <br />

              <p>
                <span className="font-semibold">Age Restriction: </span>
                {ageRestriction}
              </p>
              <p>
                <span className="font-semibold">Validatiy: </span>
                {validatiy}
              </p>

              <p>
                <span className="font-semibold">Processing Time: </span>
                {processingTime}
              </p>

              <p>
                <span className="font-semibold">Application Method: </span>
                {applicationMethod}
              </p>
              <div className="py-4 space-y-1">
                <p className="font-extrabold">Required Documents:</p>
                <li>{requiredDocuments.validPassport}</li>
                <li>{requiredDocuments.visaForm}</li>
                <li>{requiredDocuments.recentPhotograph}</li>
              </div>
              <p className="pb-8">
                <span className="font-semibold">Description: </span>
                {description}
              </p>
              <button className="btn font-bold px-12 h-14 hover:bg-[#45a735] text-lg custom-effect">
                <span className="z-10">Apply for Visa</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
