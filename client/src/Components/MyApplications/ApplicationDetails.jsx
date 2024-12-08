/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const ApplicationDetails = ({ application, loadedData, setLoadedData }) => {
  const {
    _id: id,
    countryFlag,
    countryName,
    visaType,
    processingTime,
    fee,
    validatiy,
    applicationMethod,
    appliedDate,
    applicantEmail,
    firstName,
    lastName,
  } = application;

  // handleDelete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-one-ashen-40.vercel.app/applicationDetails/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const filtered = loadedData.filter((data) => data._id !== id);
            setLoadedData(filtered);
            Swal.fire({
              title: "Deleted!",
              text: "Your Application has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div className="bg-[#f9f9f9]">
      {/* details */}
      <div className="bg-white h-full rounded-3xl">
        <div className="hero sm:py-20 py-14 h-full">
          <div className="hero-content gap-10 flex-col justify-between h-full w-full">
            <div className="flex-1 flex justify-center">
              <img src={countryFlag} className="sm:max-w-sm" />
            </div>

            <div className="flex-1 flex flex-col justify-between px-4 space-y-1.5">
              <div>
                {/* heading */}
                <div className="space-y-2">
                  <h1 className="sm:text-5xl text-4xl font-bold">
                    {countryName}
                  </h1>
                  <p className="font-semibold sm:text-xl">
                    Visa Type: {visaType}
                  </p>
                  <p className="font-semibold sm:text-lg">Fee: ${fee}</p>
                </div>

                <br />
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

                {/* Applied */}
                <div className="pt-4 space-y-1">
                  <p>
                    <span className="font-semibold">Applicant: </span>
                    {firstName} {lastName}
                  </p>
                  <p>
                    <span className="font-semibold">Applied Date: </span>
                    {appliedDate}
                  </p>
                </div>
                <p className="pb-8">
                  <span className="font-semibold">Applied Email: </span>
                  {applicantEmail}
                </p>
              </div>

              <button
                onClick={handleDelete}
                className="btn font-bold px-12 h-14 hover:bg-[#dd3333] text-lg custom-effect3"
              >
                <span className="z-10">
                  Cencel <span className="sm:inline hidden">Application</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
