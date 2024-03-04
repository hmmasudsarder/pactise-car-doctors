import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffees = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photo } =
    coffees;
  const handleUPDATECoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supper = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const product = { name, quantity, supper, test, category, details, photo };
    console.log(product);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="bg-[#F4F4F0] p-24">
      <h1 className="text-4xl">Coffee Update</h1>
      <form onSubmit={handleUPDATECoffee}>
        <div>
          <div className="flex gap-5 mb-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name Enter"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Avalable Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-5 mb-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Supper Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name Enter"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Test</span>
              </div>
              <input
                type="text"
                name="test"
                defaultValue={test}
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-5 mb-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Categories</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name Enter"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-5 mb-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">PHOTO URl</span>
              </div>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            className="btn-block btn"
            type="submit"
            value="UPDATE COFFEE"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
