import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-16">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Start Your Career?
      </h2>
      <p className="mb-6">
        Apply now and take your first step toward success.
      </p>

      <Link
        to="/apply"
        className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-200"
      >
        Apply Now
      </Link>
    </section>
  );
};

export default CallToAction;