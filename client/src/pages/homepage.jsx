import { NavLink } from "react-router-dom";
import ViewProduct from "./viewproduct";


export default function HomePage() {
  return (
    <>
      <div className="w-full">
        {/* banner */}
        <section className="relative w-full h-[70vh]">
          <img
            src="https://i.pinimg.com/1200x/82/69/62/826962c1d91456a4de0a29de1f97bae2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-xl md:text-6xl font-bold">Style that Speaks</h2>
            <p className="text-lg mt-4 max-w-xl">
              Discover clothing that expresses who you are—bold, effortless, and
              uniquely yours. Our collection is curated to help you make a
              statement without saying a word. Find pieces that elevate your
              look, boost your confidence, and let your style speak for itself.
            </p>
            <NavLink
              to="/newarrivals"
              className="mt-6 bg-white text-black px-6 py-3 rounded-full shadow hover:bg-red-900 hover:text-white transition"
            >
              New Arrivals
            </NavLink>
          </div>
        </section>
{/* category */}
        <section className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-xl font-semibold text-center mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group rounded-lg overflow-hidden shadow">
              <img
                src="https://i.pinimg.com/736x/02/e1/d8/02e1d8e96bf0be2753a489bc39194d24.jpg"
                className="w-full h-72 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
                Sarees
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow">
              <img
                src="https://i.pinimg.com/736x/25/46/05/254605d432a8f06f263d485146b6310c.jpg"
                className="w-full h-72 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
                Lehengas
              </div>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow">
              <img
                src="https://i.pinimg.com/1200x/5d/12/ae/5d12aed9a8ed0258ad94e50dd500c589.jpg"
                className="w-full h-72 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
                jewelleries
              </div>
            </div>
          </div>
        </section>
        
<section className="w-full bg-gray-100 py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

  
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src="https://i.pinimg.com/1200x/ea/0a/49/ea0a494e0e7e61a84cf3ec1520b7bec9.jpg"
        alt="Spotlight Saree"
        className="w-full h-[800px] object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
    </div>

  
    <div className="">
      <h3 className="text-3xl font-bold">Spotlight of the Week</h3>
      <p className="text-gray-600 mt-4">
        Experience the elegance of our <b>Panchali Pink Kanchipuram Silk Saree </b>
        handwoven with rich textures and traditional craftsmanship.  
        Perfect for weddings, festivals, and grand celebrations.
      </p>

      <p className="text-2xl font-semibold text-red-900 mt-4">
        ₹{30534}
      </p>

      <NavLink
        to="/saree"
        className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full shadow hover:bg-red-900 transition"
      >
        Shop Now
      </NavLink>
    </div>

  </div>
</section>

<ViewProduct/>

      </div>
    </>
  );
}
