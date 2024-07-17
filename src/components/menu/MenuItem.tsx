export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      
      <div className="text-center">
      <img src="/pizza.png" alt="pizza" className="max-h-24 block mx-auto" />
      </div>
      
      <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm ">
        Pepperoni pizza is one of the most popular pizzas in the world. It's a
        classic combination of tomato sauce, cheese, and pepperoni that has been
        around for decades. But what exactly is pepperoni pizza made of? Let's
        take a closer look at the ingredients that make up this delicious dish.
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to cart $12
      </button>
    </div>
  );
}
