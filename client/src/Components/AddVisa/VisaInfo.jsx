import { FaMapMarkerAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const VisaInfo = () => {
  return (
    <div className="px-5 sm:w-11/12 mx-auto mt-8">
      <form className="flex flex-col gap-10">
        {/* top */}
        <div className="flex items-center justify-center xl:flex-row flex-col gap-10">
          {/* leftside */}
          <div className="w-full sm:px-10 px-5 sm:py-24 py-14 bg-white rounded-3xl space-y-8">
            {/* title */}
            <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
              <div className="p-8 bg-[#26472b] inline-block rounded-full">
                <FaMapMarkerAlt size={35} color="#78eb54" />
              </div>

              <div>
                <h2 className="sm:text-4xl text-3xl font-bold">Visa Infomation</h2>
                <p className="font-semibold">
                  Please fill out all visa details here.
                </p>
              </div>
            </div>

            {/* row-01 */}
            <div className="flex gap-4 md:flex-row flex-col ">
              <input
                type="text"
                placeholder="Country Name"
                className="input input-bordered w-full text-base font-semibold"
                required
              />

              <input
                type="text"
                placeholder="Upload Country Flag"
                className="input input-bordered w-full text-base font-semibold"
                required
              />
            </div>

            {/* row-02 */}
            <div className="flex gap-4 md:flex-row flex-col">
              <select className="select select-bordered w-full text-base font-semibold">
                <option disabled selected>
                  Visa Type
                </option>
                <option>Tourist visa</option>
                <option>Student visa</option>
                <option>Official visa</option>
                <option>Medical visa</option>
                <option>Conference visa</option>
              </select>

              <select className="select select-bordered w-full text-base font-semibold">
                <option disabled selected>
                  Processing Time
                </option>
                <option>Normal (Guaranteed within 3 working days)</option>
                <option>Urgent (Guaranteed within 2 working days)</option>
                <option>Super Urgent (Within 1 working day)</option>
              </select>
            </div>

            {/* row-03 */}
            <input
              type="number"
              placeholder="Visa Fee (Only Number)"
              className="input input-bordered w-full text-base font-semibold"
              required
            />
          </div>

          {/* rightside */}
          <div className="w-full sm:px-10 px-5 sm:py-24 py-14 bg-white rounded-3xl space-y-8">
            {/* title */}
            <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
              <div className="p-8 bg-[#26472b] inline-block rounded-full">
                <IoDocumentTextOutline size={35} color="#78eb54" />
              </div>

              <div>
                <h2 className="sm:text-4xl text-3xl font-bold">Required Documents</h2>
                <p className="font-semibold">
                  Please fill out all documents details here.
                </p>
              </div>
            </div>

            {/* row-01 */}
            <div className="flex gap-4 md:flex-row flex-col">
              <select className="select select-bordered w-full text-base font-semibold">
                <option disabled selected>
                  Validity
                </option>
                <option>30-90 days</option>
                <option>3-6 months</option>
                <option>6-9 months</option>
                <option>1-2 years</option>
                <option>1-5 years</option>
              </select>

              <select className="select select-bordered w-full text-base font-semibold">
                <option disabled selected>
                  Application Method
                </option>
                <option>Online Visa Application</option>
                <option>Visa Application Center</option>
                <option>Government Visa Application</option>
                <option>Embassy/Consulate Application</option>
              </select>
            </div>

            {/* row-02 */}
            <input
              type="number"
              placeholder="Age Restriction (Only Number)"
              className="input input-bordered w-full text-base font-semibold"
              required
            />

            {/* row-03 */}
            <div className="flex gap-4 sm:flex-nowrap flex-wrap">

                {/* checkbox-01 */}
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <span className="label-text">Valid Passport</span>
                </label>
              </div>

                {/* checkbox-02 */}
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <span className="label-text">Visa Form</span>
                </label>
              </div>

                {/* checkbox-03 */}
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <span className="label-text">Recent Photograph</span>
                </label>
              </div>


            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="sm:px-10 px-6 sm:py-16 py-8 bg-white rounded-3xl text-center">
          <textarea
            placeholder="Description..."
            rows={"4"}
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>

          <button
            type="submit"
            className="btn hover:bg-[#45a735] px-14 mt-12 text-lg font-semibold custom-effect"
          >
            <span className="z-10">Add Visa</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisaInfo;
