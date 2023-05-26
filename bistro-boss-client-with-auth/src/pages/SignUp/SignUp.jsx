import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import signUpBg from "../../assets/account/account_bg.png";
import signUpImg from "../../assets/account/authentication2.png";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url("${signUpBg}")`,

          backgroundSize: "cover",
        }}
      >
        <div className="hero-content flex-col md:flex-row-reverse shadow-2xl p-20">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold text-center my-10">SignUp</h1>
            <img src={signUpImg} alt="Register Image" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt font-medium link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mb-6 font-medium">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-800">
                  Login Here
                </Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
