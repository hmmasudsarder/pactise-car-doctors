const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure className="px-5 pt-3">
          <img
            src={service.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-start">
          <h2 className="card-title">{service.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p className="text-xl">Price : ${service.price}</p>
          <div className="card-actions">
            <button className="btn btn-error text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
