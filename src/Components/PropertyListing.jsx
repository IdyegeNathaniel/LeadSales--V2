import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertyListing = ({ property }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = property.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "....";
  }

  const handleShow = () => setShowFullDescription((prevState) => !prevState);

    const expApi = "https://properties-api-ruddy.vercel.app/api";

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2 font-semibold">
            {property.type}
          </div>
          <h3 className="font-bold text-xl">{property.title}</h3>
        </div>
        <div className="mb-5">{description}</div>
        <button
          onClick={handleShow}
          className="text-orange-500 hover:text-orange-700 mb-5"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <h3 className="mb-5">{property.price}</h3>
        <div className="border border-b-orange-500 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-indigo-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {property.location}
          </div>
          <Link
            to={`/properties/${property.id}`}
            onClick={() => window.scrollTo(0, 0)}
            className=" bg-orange-500 h-[36px] py-2 px-4 rounded-lg text-center text-white"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
