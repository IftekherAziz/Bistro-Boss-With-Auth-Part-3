const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="card w-96 bg-zinc-50 shadow">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-auto" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-yellow-600  border-0 border-b-4 border-yellow-600 mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
