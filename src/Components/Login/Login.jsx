import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center w-1/2 lg:text-left mr-60">
          <img src={login} alt="" className="" />
        </div>
        <div className="card w-1/2 shrink-0 max-w-sm shadow-2xl bg-base-100 py-5">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          <h3 className="text-center py-3 font-bold" >
            New To Car Doctors? <Link className=" text-orange-600 " to="/SignUp">Sign UP</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
