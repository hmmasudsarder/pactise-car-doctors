import person from "../../../assets/images/about_us/person.jpg";
import pertes from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img
              src={person}
              className="w-3/4 h-full rounded-lg shadow-2xl"
            />
            <img
              src={pertes}
              className="w-2/4 absolute border-8 border-white right-5 top-1/2 rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2 space-y-5 p-4">
            <h2 className="text-2xl font-semibold text-orange-400">About</h2>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-error text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
