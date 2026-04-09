import React from "react";
import { useParams, Link } from "react-router-dom";

const readableLabel = (value) => {
  if (!value) return "";
  return value
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const ServiceDetail = () => {
  const { service, subservice } = useParams();
  const main = readableLabel(service);
  const sub = readableLabel(subservice);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900">{main}</h1>
      {subservice && <h2 className="text-xl text-blue-600 mt-2">{sub}</h2>}
      <p className="mt-4 text-gray-700">
        This is the dynamic service detail page. It handles routes like
        <code className="bg-gray-100 px-1 py-0.5 rounded">/services/{service}/{"<subservice>"}</code>.
      </p>
      <div className="mt-6 space-x-2">
        <Link
          to="/services"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Services
        </Link>
        <Link
          to="/"
          className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
