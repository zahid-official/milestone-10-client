/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";

const MyVisaDetails = ({ visa, myVisas, setMyVisas }) => {
  // state for update
  const [updateData, setUpdateData] = useState(null);

  const {
    _id: id,
    countryFlag,
    countryName,
    visaType,
    processingTime,
    visaFee,
    validatiy,
    applicationMethod,
  } = visa;

  // handleUpdateData read
  const handleUpdateData = (uniqueId) => {
    fetch(`https://server-one-ashen-40.vercel.app/visas/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateData(data);
      });
  };

  // handleModal for update
  const handleModal = (event) => {
    event.preventDefault();

    const country = event.target.countryName.value;
    const flag = event.target.countryFlag.value;
    const type = event.target.visaType.value;
    const time = event.target.processingTime.value;
    const fee = event.target.visaFee.value;
    const valid = event.target.validatiy.value;
    const applyMethod = event.target.applicationMethod.value;

    const updatedValue = {
      country,
      flag,
      type,
      time,
      fee,
      valid,
      applyMethod,
    };

    console.log(applyMethod)


    // update visa
    fetch(`https://server-one-ashen-40.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        'content-type' : "application/json",
      },
      body: JSON.stringify(updatedValue),
    })

    document.getElementById(`my_modal_${id}`).close();
  };

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
        fetch(`https://server-one-ashen-40.vercel.app/visaDetails/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const filtered = myVisas.filter((data) => data._id !== id);
            setMyVisas(filtered);
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
                  <p className="font-semibold sm:text-lg">Fee: ${visaFee}</p>
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

                {/* spacing for btn */}
                <div className="pt-4 pb-8"></div>
              </div>

              <div className="flex gap-5">
                {/* update btn */}
                <button
                  onClick={() => {
                    handleUpdateData(id);
                    document.getElementById(`my_modal_${id}`).showModal();
                  }}
                  className="btn font-bold px-12 h-14 hover:bg-[#898d4fbe] text-lg custom-effect2"
                >
                  <span className="z-10">Update</span>
                </button>

                {/* delete btn */}
                <button
                  onClick={handleDelete}
                  className="btn font-bold px-12 h-14 hover:bg-[#dd3333] text-lg custom-effect3"
                >
                  <span className="z-10">Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog
        id={`my_modal_${id}`}
        className="modal modal-bottom sm:modal-middle "
      >
        <div className="modal-box pt-12 px-10 pb-16 sm:rounded-2xl rounded-none">
          <form onSubmit={handleModal}>
            <h2 className="text-3xl mb-4 font-bold">Update Visa</h2>
            <div className="space-y-5 mb-10">
              {/* country name */}
              <div className="form-control">
                <input
                  type="text"
                  name="countryName"
                  defaultValue={updateData?.countryName}
                  placeholder="Country Name"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* country flag */}
              <div className="form-control">
                <input
                  type="text"
                  name="countryFlag"
                  defaultValue={updateData?.countryFlag}
                  placeholder="Upload Country Flag"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* visa type */}
              <div className="form-control">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  required="required"
                  name="visaType"
                  defaultValue={updateData?.visaType}
                >
                  <option value="" disabled selected>
                    Visa Type
                  </option>
                  <option value="Tourist Visa">Tourist Visa</option>
                  <option value="Student Visa">Student Visa</option>
                  <option value="Official Visa">Official Visa</option>
                  <option value="Medical Visa">Medical Visa</option>
                  <option value="Conference visa">Conference visa</option>
                </select>
              </div>

              {/* processing time */}
              <div className="form-control">
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={updateData?.processingTime}
                  placeholder="Processing Time"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* visa fee */}
              <div className="form-control">
                <input
                  type="number"
                  name="visaFee"
                  defaultValue={updateData?.visaFee}
                  placeholder="Visa Fee (Only Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* validatiy */}
              <div className="form-control">
                <input
                  type="text"
                  name="validatiy"
                  defaultValue={updateData?.validatiy}
                  placeholder="Validatiy"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* applicationMethod */}
              <div className="form-control">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  name="applicationMethod"
                  required="required"
                  defaultValue={updateData?.applicationMethod}
                >
                  <option value="" disabled selected>
                    Application Method
                  </option>
                  <option value="Online Visa Application">
                    Online Visa Application
                  </option>
                  <option value="Visa Application Center">
                    Visa Application Center
                  </option>
                  <option value="Government Visa Application">
                    Government Visa Application
                  </option>
                  <option value="Embassy/Consulate Application">
                    Embassy/Consulate Application
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn  hover:bg-[#a7aa7b] text-lg font-semibold custom-effect2 w-full"
            >
              <span className="z-10">Update</span>
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyVisaDetails;
