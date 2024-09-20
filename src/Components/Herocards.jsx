import { Link } from "react-router-dom";
import Card from "./Card";

const Herocards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Customers</h2>
            <p className="mt-2 mb-4">
              Browse our new propertties and get yourself that desire
            </p>
            <Link
              to="/properties"
              className="inline-block bg-black text-white py-4 px-2 rounded-lg hover:bg-gray-800"
            >
              Browse Properties
            </Link>
          </Card>
          <Card bg="bg-orange-100">
            <h2 className="text-2xl font-bold">For Realtors</h2>
            <p className="mt-2 mb-4">
              List your properties here and get a suitable sale
            </p>
            <Link
              to="/sell-property"
              className="inline-block bg-orange-500 text-white py-4 px-2 rounded-lg hover:bg-orange-400"
            >
              Add Properties
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Herocards;
