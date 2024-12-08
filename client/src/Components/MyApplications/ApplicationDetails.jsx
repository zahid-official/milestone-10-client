import { useLoaderData, useNavigate } from "react-router-dom";
import PageTitle from "../AddVisa/PageTitle";
import Swal from "sweetalert2";

const ApplicationDetails = () => {
  const data = useLoaderData();
  // useNavigate
  const navigate = useNavigate();

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
  } = data;

  // handleDelete
  const handleDelete = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:3000/applicationDetails/${id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/myApplications');
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Application has been deleted.",
                    icon: "success"
                  });
            })
          
        }
      });
  }


  return (
    <div className="bg-[#f9f9f9] pt-16 pb-36">
      <PageTitle
        heading1={"Application"}
        heading2={"Details"}
        subHeading={"Application Details"}
      ></PageTitle>

      {/* details */}
      <div>
        <div className="hero bg-white xl:w-10/12 w-11/12 mx-auto sm:py-28 py-14 rounded-3xl">
          <div className="hero-content gap-10 flex-col lg:flex-row w-full">
            <div className="flex-1 flex justify-center">
              <img src={countryFlag} className="sm:max-w-sm" />
            </div>

            <div className="flex-1 px-4 space-y-1.5">
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

              <button
                onClick={handleDelete}
                className="btn font-bold px-12 h-14 hover:bg-[#45a735] text-lg custom-effect"
              >
                <span className="z-10">Cencel Application</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
