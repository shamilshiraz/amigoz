import React, { useState } from 'react';

const LargeClientScroller = () => {
  // Sample larger client list - replace with your actual clients
  const clients = [
    { id: 1, name: "Acme Inc.", industry: "Manufacturing" },
    { id: 2, name: "Globex Corp", industry: "Technology" },
    { id: 3, name: "Stark Industries", industry: "Defense" },
    { id: 4, name: "Wayne Enterprises", industry: "Conglomerate" },
    { id: 5, name: "Cyberdyne Systems", industry: "Technology" },
    { id: 6, name: "Umbrella Corporation", industry: "Pharmaceuticals" },
    { id: 7, name: "Massive Dynamic", industry: "Research" },
    { id: 8, name: "Oscorp Industries", industry: "Biochemical" },
    { id: 9, name: "Aperture Science", industry: "Research" },
    { id: 10, name: "InGen", industry: "Bioengineering" },
    { id: 11, name: "Weyland-Yutani", industry: "Space Exploration" },
    { id: 12, name: "Tyrell Corporation", industry: "Robotics" },
    { id: 13, name: "Soylent Corporation", industry: "Food Processing" },
    { id: 14, name: "Omni Consumer Products", industry: "Consumer Goods" },
    { id: 15, name: "Initech", industry: "Software" },
    { id: 16, name: "Gekko & Co", industry: "Finance" },
    { id: 17, name: "Rekall", industry: "Tourism" },
    { id: 18, name: "Lacuna Inc.", industry: "Medical Services" },
    { id: 19, name: "Wonka Industries", industry: "Confectionery" },
    { id: 20, name: "Bubba Gump", industry: "Seafood" },
    { id: 21, name: "Los Pollos Hermanos", industry: "Fast Food" },
    { id: 22, name: "Duff Beer", industry: "Beverages" }
  ];

  // Generate random colors for each client (for visual variety)
  const colors = [
    "bg-blue-100 text-blue-600", 
    "bg-green-100 text-green-600", 
    "bg-purple-100 text-purple-600",
    "bg-yellow-100 text-yellow-600", 
    "bg-red-100 text-red-600", 
    "bg-indigo-100 text-indigo-600"
  ];

  const getRandomColor = (id) => {
    return colors[id % colors.length];
  };

  // Split clients into multiple rows for better display
  const [speed] = useState(30); // Animation speed in seconds

  return (
    <div className="flex justify-center py-16 overflow-hidden" style={{marginBottom:'20vh'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold y-10">Our Trusted Clients</h2>
        </div>

        {/* First row - moves left to right */}
        <div className="relative mb-12 overflow-hidden py-4">
          <div className="client-scroll-1 flex space-x-6">
            {clients.slice(0, 11).map(client => (
              <div 
                key={client.id} 
                className="flex-none w-48 h-28 rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-2 ${getRandomColor(client.id)}`}>
                    {client.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium ">{client.name}</p>
                  <p className="text-xs ">{client.industry}</p>
                </div>
              </div>
            ))}
            
            {/* Duplicate for continuous scrolling */}
            {clients.slice(0, 11).map(client => (
              <div 
                key={`dup1-${client.id}`} 
                className="flex-none w-48 h-28  rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-2 ${getRandomColor(client.id)}`}>
                    {client.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-gray-800">{client.name}</p>
                  <p className="text-xs text-gray-500">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row - moves right to left (opposite direction) */}
        <div className="relative mb-12 overflow-hidden py-4">
          <div className="client-scroll-2 flex space-x-6">
            {clients.slice(11).map(client => (
              <div 
                key={client.id} 
                className="flex-none w-48 h-28 rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-2 ${getRandomColor(client.id)}`}>
                    {client.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-gray-800">{client.name}</p>
                  <p className="text-xs text-gray-500">{client.industry}</p>
                </div>
              </div>
            ))}
            
            {/* Duplicate for continuous scrolling */}
            {clients.slice(11).map(client => (
              <div 
                key={`dup2-${client.id}`} 
                className="flex-none w-48 h-28 rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-2 ${getRandomColor(client.id)}`}>
                    {client.name.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-gray-800">{client.name}</p>
                  <p className="text-xs text-gray-500">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .client-scroll-1 {
          display: flex;
          width: max-content;
          animation: scrollLeft ${speed}s linear infinite;
        }
        
        .client-scroll-2 {
          display: flex;
          width: max-content;
          animation: scrollRight ${speed}s linear infinite;
        }
        
        .client-scroll-1:hover,
        .client-scroll-2:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LargeClientScroller;
