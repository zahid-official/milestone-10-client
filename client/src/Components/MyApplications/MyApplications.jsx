import { useContext } from "react";
import PageTitle from "../AddVisa/PageTitle";
import ContextAPI from "../Auth/ContextAPI";

const MyApplications = () => {
    // useContext
  const {users} = useContext(ContextAPI);
  return (
    <>
      <div className="bg-[#f9f9f9] pt-16 pb-36">
        <PageTitle
          heading1={"My"}
          heading2={"Applications"}
          subHeading={"My Applications"}
        ></PageTitle>
      </div>
    </>
  );
};

export default MyApplications;
