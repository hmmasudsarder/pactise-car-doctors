import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUP = () => {
    const {createUser} = useContext(AuthContext);
    const handleAddUSer = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center w-1/2 lg:text-left mr-60">
          <img src={login} alt="" className="" />
        </div>
        <div className="card w-1/2 shrink-0 max-w-sm shadow-2xl bg-base-100 py-5">
          <h1 className="text-5xl font-bold text-center">Sign UP!</h1>
          <form onSubmit={handleAddUSer} className="card-body">
            <div className="form-control">
              <label className="label">
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
            <div className="form-control">
              <label className="label">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
              <input type="submit" value="SIGN UP" className="btn text-white btn-error" />
            </div>
          </form>
          <h3 className="text-center font-bold py-3">Alredy Have An Account? <Link className=" text-orange-600 " to="/login">Login</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
