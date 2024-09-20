import { useEffect, useState } from "react";
import PropertyListing from "./PropertyListing";
import Spinner from "./Spinner";

const PropertyListings = ({ isHome = false }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const apiUrl = isHome ? "/api/properties?_limit=3" : "/api/properties";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setProperties(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-10 px-5 bg-orange-100">
      <div className="container-xl lg:container mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          {isHome ? "Recent Properties" : "Browse Properties"}
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid sm:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyListing key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyListings;
