import PageTitle from "./PageTitle";
import VisaInfo from "./VisaInfo";

const AddVisa = () => {
  return (
    <div className="bg-[#f5f5f594] pt-16 pb-36">
      <PageTitle
        heading1={"Add"}
        heading2={"Visa"}
        subHeading={"Add Visa"}
      ></PageTitle>

      <VisaInfo></VisaInfo>
    </div>
  );
};

export default AddVisa;
