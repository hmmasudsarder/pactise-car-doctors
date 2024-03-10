import image1 from "../../../assets/images/banner/6.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import image5 from "../../../assets/images/banner/5.jpg";
// import image6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 space-y-7 pl-16">
            <h2 className="text-5xl font-extrabold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of Available But The
              Majority Have Foffered Atteration In Some Form
            </p>
            <div className="">
              <button className="btn btn-outline btn-error mr-5 text-white">
                Discover Menu
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle btn-outline btn-error">
          <FaArrowLeft />
          </a>
          <a href="#slide2" className="btn btn-circle btn-outline btn-error">
          <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 space-y-7 pl-16">
            <h2 className="text-5xl font-extrabold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of Available But The
              Majority Have Foffered Atteration In Some Form
            </p>
            <div className="">
              <button className="btn btn-outline btn-error mr-5 text-white">
                Discover Menu
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle btn-outline btn-error">
          <FaArrowLeft />
          </a>
          <a href="#slide3" className="btn btn-circle btn-outline btn-error">
          <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 space-y-7 pl-16">
            <h2 className="text-5xl font-extrabold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of Available But The
              Majority Have Foffered Atteration In Some Form
            </p>
            <div className="">
              <button className="btn btn-outline btn-error mr-5 text-white">
                Discover Menu
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle btn-outline btn-error">
          <FaArrowLeft />
          </a>
          <a href="#slide4" className="btn btn-circle btn-outline btn-error">
          <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full left-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white w-1/2 space-y-7 pl-16">
            <h2 className="text-5xl font-extrabold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There Are Many Variations Of Passages Of Available But The
              Majority Have Foffered Atteration In Some Form
            </p>
            <div className="">
              <button className="btn btn-outline btn-error mr-5 text-white">
                Discover Menu
              </button>
              <button className="btn btn-outline btn-error">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle btn-outline btn-error">
          <FaArrowLeft />
          </a>
          <a href="#slide1" className="btn btn-circle btn-outline btn-error hover:text-white">
          <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
