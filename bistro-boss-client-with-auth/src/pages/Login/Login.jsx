import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import loginBg from "../../assets/account/account_bg.png";
import loginImg from "../../assets/account/authentication2.png";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  // Captcha engine config (optional)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // User login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Sign in user with email and password
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // Validate captcha input value
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div
          className="hero-content flex-col md:flex-row-reverse shadow-lg p-20"
          style={{
            backgroundImage: `url("${loginBg}")`,

            backgroundSize: "cover",
          }}
        >
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold text-center my-10">Login</h1>
            <img src={loginImg} alt="Login Image" />
          </div>
          <div className="md:w-1/2 max-w-xl border shadow-xl">
            <form onSubmit={handleLogin} className="card-body">
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
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center mb-6 font-medium">
              <small>
                New Here?{" "}
                <Link to="/signup" className="text-blue-800">
                  Create an account
                </Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
