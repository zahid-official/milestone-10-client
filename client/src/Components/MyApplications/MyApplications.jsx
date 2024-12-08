import { useContext, useEffect, useState } from "react";
import PageTitle from "../AddVisa/PageTitle";
import ContextAPI from "../Auth/ContextAPI";
import ApplicationDetails from "./ApplicationDetails";

const MyApplications = () => {
  // useContext
  const { users, loading } = useContext(ContextAPI);
  const email = users?.email;

  // state for loadedData
  const [loadedData, setLoadedData] = useState(null);

  // useEffect for Data load
  useEffect(() => {
    fetch(`http://localhost:3000/applications/${email}`)
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, [email]);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f9f9f9] pt-16 pb-36">
        <PageTitle
          heading1={"My"}
          heading2={"Applications"}
          subHeading={"My Applications"}
        ></PageTitle>

        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-10 px-4 sm:px-20 pt-10 pb-36 rounded-[60px]">
          {loadedData && loadedData.map((application) => (
            <ApplicationDetails key={application._id} application={application} loadedData={loadedData} setLoadedData={setLoadedData}></ApplicationDetails>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyApplications;
