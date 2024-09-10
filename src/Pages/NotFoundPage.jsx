import React from "react";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="h-96 text-center flex flex-col justify-center items-center pt-20">
      <FaExclamationTriangle className="text-orange-600 text-6xl mb-4" />
      <h1 className="text-6xl mb-4 font-bold">404 Not Found</h1>
      <p className="text-xl mb-5">This Page does not exist</p>
      <Link
        to="/"
        className="bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 mt-4 rounded-xl"
      >
        <FaArrowLeft className="inline mr-2" />
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
