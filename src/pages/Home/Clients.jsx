// import React from "react";

// const Clients = () => {
//   const clients = [
//     {
//       name: "Microsoft",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//     },
//     {
//       name: "Google",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     },
//     {
//       name: "Amazon",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     },
//     {
//       name: "IBM",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//     },
//     {
//       name: "Infosys",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
//     },
//     {
//       name: "Oracle",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
//     },
//     {
//       name: "Accenture",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">
//           Trusted by Leading Companies
//         </h2>

//         <p className="text-gray-600 mb-12">
//           We proudly collaborate with global brands and innovative startups.
//         </p>

//         <div className="relative w-full overflow-hidden">
//           <div className="flex animate-marquee space-x-16 w-max">
//             {clients.concat(clients).map((client, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center bg-white shadow-md rounded-xl px-10 py-6 hover:shadow-xl transition duration-300"
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="h-12 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;


import React, { useEffect, useState } from "react";
import apiService from "../../api";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await apiService.getClients();
      setClients(res.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Trusted by Leading Companies
        </h2>

        <p className="text-gray-600 mb-12">
          We proudly collaborate with global brands and innovative startups.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee space-x-16 w-max">
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white shadow-md rounded-xl px-10 py-6 hover:shadow-xl transition duration-300"
              >
                <img
                  src={`http://127.0.0.1:8000${client.logo}`}
                  alt={client.name}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;