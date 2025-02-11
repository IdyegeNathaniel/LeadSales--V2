// THE useEffect METHOD FETCHING

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Spinner from "../Components/Spinner";

// const PropertyPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [property, setProperty] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const res = await fetch(`/api/properties/${id}`);
//         if (!res.ok) {
//           throw new error("Property not found");
//         }
//         const data = await res.json();
//         console.log(data);
//         setProperty(data);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProperty();
//   }, []);

//   return loading ? <Spinner /> : <h1>{property.type}</h1>;
// };

// export default PropertyPage;

//THE DATALOADER METHOD

import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PropertyPage = ({ deleteProperty }) => {
  const { id } = useParams();
  const property = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = () => onDeleteClick(property.id);
  const onDeleteClick = (propertyId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing? "
    );
    if (!confirm) return;

    deleteProperty(propertyId);

    toast.success("Property deleted successfully..");
    dispatch(clearError());

    navigate("/buy-properties");
  };

  return (
    <>
      <section className="pt-20">
        <div className="container m-auto py-6 px-6">
          <Link
            to="/buy-properties"
            className="flex items-center text-orange-600 hover:text-orange-500"
          >
            <FaArrowLeft className="mr-2" />
            Back to Property Listing
          </Link>
        </div>
      </section>

      <section className="bg-orange-200">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {/* MAIN SECTION */}

            <main>
              <div
                key={property.id}
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div className="text-gray-500 mb-4">{property.type}</div>
                <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-indigo-700 mr-1" />
                  <p className="text-indigo-700">{property.location}</p>
                </div>
              </div>

              <div
                key={property.id}
                className="bg-white p-6 rounded-lg shadow-md mt-6"
              >
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Property Description
                </h3>

                <p className="mb-4">{property.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Price
                </h3>

                <p className="mb-4 font-semibold">{property.price}</p>
              </div>
            </main>

            {/* SIDE BAR */}

            <aside>
              <div
                key={property.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{property.company.name}</h2>

                <p className="my-2">{property.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {property.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {" "}
                  {property.company.contactNumber}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Property</h3>
                <Link
                  to={`/edit-property/${property.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Property
                </Link>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Property
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const propertyLoader = async ({ params }) => {
  const res = await fetch(`/api/properties/${params.id}`);
  if (!res.ok) {
    throw new Error("Property Not Found");
  }
  const data = await res.json();
  return data;
};

export { PropertyPage as default, propertyLoader };
