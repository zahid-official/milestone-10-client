import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

  };
  return (
    <>
      <div className="card bg-white w-full max-w-2xl mx-auto py-20 sm:px-12 px-6">
        <form onSubmit={handleSubmit}>
          <h2 className={"sm:text-[40px] text-3xl font-semibold mb-8"}>
            Sign Up to Viso
          </h2>

          {/* input fields */}
          <div className="space-y-4">
            {/* name */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            {/* photo */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>

            {/* email */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            {/* submit */}
            <div className="form-control pt-8">
              <button className="btn hover:bg-[#45a735] mt-2 text-lg font-semibold custom-effect">
                <span className="z-10">Sign Up</span>
              </button>

              {/* google sign in */}
              <div className="divider py-5">or sign up with Google</div>
              <button
                type="button"
                className="btn hover:bg-[#1a394e] bg-[#254760] text-white text-lg font-bold h-14"
              >
                <FcGoogle size={30} />
                <span className="mt-1"> Google Sign Up</span>
              </button>
            </div>
          </div>
        </form>

        <p className="text-center mt-7">
          {`Already have an account? `}
          <Link to={"/login"}>
            <span className="underline font-bold">Sign In</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
