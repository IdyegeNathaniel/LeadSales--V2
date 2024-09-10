import { Link } from "react-router-dom";

const Viewmore = () => {
  return (
    <section className="max-w-lg m-auto px-6 my-10">
      <Link
        to="/properties"
        className="block bg-black text-white py-4 px-6 rounded-xl text-center hover:bg-gray-700"
      >
        View More
      </Link>
    </section>
  );
};

export default Viewmore;
