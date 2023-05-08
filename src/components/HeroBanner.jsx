import coffee1 from '../assets/coffee-1.jpeg';
import coffee2 from '../assets/coffee-2.jpeg';

const HeroBanner = () => {
  return (
    <section className="px-4 lg:px-0">
      <div className="mt-6 bg-gray-900 h-[400px] rounded overflow-hidden">
        <div className="grid-cols-2 lg:grid">
          <div className="p-12 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-white lg:text-6xl">
              Enjoy our freshly brewed Coffee.
            </h1>
            <p className="mt-8 text-lg text-white">
              WiredBrain.Coffee is dedicated to brought the best of the day to you by our top-notch
              coffee which has been hand-picked.
            </p>
            <div className="w-64 mx-auto mt-8 lg:mx-0">
              <button className="relative w-full flex justify-center py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="">Order now</span>
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img
              src={coffee1}
              alt="coffee"
              className="absolute top-0 right-0 block h-64 rounded-bl shadow ring-4 ring-white"
            />
            <img
              src={coffee2}
              alt="coffee"
              className="absolute w-64 rounded shadow z-1 left-10 top-16 ring-4 ring-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
