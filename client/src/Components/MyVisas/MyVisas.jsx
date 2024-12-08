import { useContext, useEffect, useState } from "react";
import ContextAPI from "../Auth/ContextAPI";
import PageTitle from "../AddVisa/PageTitle";
import MyVisaDetails from "./MyVisaDetails";

const MyVisas = () => {
  // useContext
  const { users, loading } = useContext(ContextAPI);
  const email = users?.email;

  // state for myVisas
  const [myVisas, setMyVisas] = useState(null);

  // useEffect for Data load
  useEffect(() => {
    fetch(`https://server-one-ashen-40.vercel.app/visa/${email}`)
      .then((res) => res.json())
      .then((data) => setMyVisas(data));
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
          heading2={"Visas"}
          subHeading={"My Visas"}
        ></PageTitle>

        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-10 px-4 sm:px-20 pt-10 pb-36 rounded-[60px]">
          {myVisas &&
            myVisas.map((visa) => (
              <MyVisaDetails
                key={visa._id}
                visa={visa}
                myVisas={myVisas}
                setMyVisas={setMyVisas}
              ></MyVisaDetails>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyVisas;
