import React, { useState } from 'react';

const LargeClientScroller = () => {
  // Sample larger client list - replace with your actual clients
  const clients = [
    { id: 1, name: "HONOR", industry: "Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Honor-logo.png" },
    { id: 2, name: "Microsoft", industry: "Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 3, name: "Formula 1", industry: "Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/F1_logo.svg" },
    { id: 4, name: "Angel One", industry: "Financial Services", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Angel_One_logo.svg" },
    { id: 5, name: "Weatherford", industry: "Oil & Gas", logo: "https://www.weatherford.com/globalassets/logo/weatherford-logo.png" },
    { id: 6, name: "Dubai Police", industry: "Law Enforcement", logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Dubai_Police_Logo.svg" },
    { id: 7, name: "TotalEnergies", industry: "Energy", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/TotalEnergies_logo.svg" },
    { id: 8, name: "Radiant Filters", industry: "Filtration", logo: "https://radiantfilters.com/images/logo.png" },
    { id: 9, name: "Quadra Wealth", industry: "Finance", logo: "https://quadrawealth.com/wp-content/uploads/2022/01/Quadra-Wealth-Logo.png" },
    { id: 10, name: "Team Activators", industry: "Consulting", logo: "" }, // No public logo found
    { id: 11, name: "Enagic", industry: "Health & Wellness", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Enagic_Logo.png" },
    { id: 12, name: "Emirates Home Nursing", industry: "Healthcare", logo: "https://www.emirateshomenursing.ae/themes/emirates_home_nursing/images/logo.svg" },
    { id: 13, name: "Intwo", industry: "Technology", logo: "https://intwo.cloud/wp-content/uploads/2021/10/intwo_logo.svg" },
    { id: 14, name: "Bevatel", industry: "Communications", logo: "https://www.bevatel.com/wp-content/uploads/2020/10/Bevatel.png" },
    { id: 15, name: "Makruzz", industry: "Travel", logo: "https://makruzz.com/images/makruzz-logo.png" },
    { id: 16, name: "Amanzada Perfumes", industry: "Fragrance", logo: "" }, // No public logo found
    { id: 17, name: "Nautika", industry: "Fashion", logo: "" }, // No public logo found
    { id: 18, name: "Sawa International", industry: "Manufacturing", logo: "" }, // No public logo found
    { id: 19, name: "NOT", industry: "Retail", logo: "" } // No public logo found
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
