import React from 'react';

const LargeClientScroller = () => {
  // Array with id and url - unchanged from original
  const clients = [
    { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/2/25/HONOR_Logo.png" },
    { id: 2, url: "ms.jpg" },
    { id: 3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png" },
    { id: 4, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Angel_One_Logo.svg/2560px-Angel_One_Logo.svg.png" },
    { id: 5, url: "https://1000logos.net/wp-content/uploads/2020/07/Weatherford-Logo.png" },
    { id: 6, url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Dubai-police-logo-vector.png" },
    { id: 7, url: "te.jpg" },
    { id: 8, url: "https://media.licdn.com/dms/image/v2/C510BAQFTP_J1f7dwjA/company-logo_200_200/company-logo_200_200/0/1630575257513/radiant_filters_logo?e=2147483647&v=beta&t=pNYGaWiWeWLTCNTy3Wo43jiLJWBsUt0P8FM2B09Bo1Q" },
    { id: 9, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUPm51VBHSXismHQ6jJd6oksqwF-TWgYNOw&s" },
    { id: 10, url: "./engc.jpg" },
    { id: 11, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48UhIN3Km65j9tLKkLf3TnDG8zWF2cwBXEA&s" },
    { id: 12, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaLtYCdonMh1xnfnGyWHAVldOfv1Ro-DIfg&s" },
    { id: 13, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzByzyCT0jxgor3Sl2traPaXV1qxGeeXrDmA&s" },
    { id: 14, url: "slw.png" },
    { id: 15, url: "./aai.jpg" },
    { id: 16, url: "https://nautica-ae.com/cdn/shop/files/nautica-logo_1200x1200.png?v=1671458121" },
    { id: 17, url: "https://media.licdn.com/dms/image/v2/C4D0BAQHLr4MxM6coWg/company-logo_200_200/company-logo_200_200/0/1631324885552?e=2147483647&v=beta&t=7KTtKSgv_g8wJiH5JSA_mOfsNhxV3XxQcKs4qKSf2dA" }, 
    { id: 18, url: "./cca.jpg" },
  ];

  return (
    <div id="contact" className="w-full py-16 overflow-hidden" style={{ marginBottom: "20vh" }}>
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Trusted Clients</h2>
        </div>

        {/* First row - moves left to right */}
        <div className="relative mb-12 overflow-hidden py-4">
          <div className="marquee">
            <div className="marquee-content">
              {/* Repeat the first half clients multiple times to ensure no gaps */}
              {Array(4).fill().map((_, repeatIndex) => (
                clients.slice(0, 9).map((client, index) => (
                  <div key={`row1-${repeatIndex}-${index}`} className="marquee-item">
                    <img 
                      src={client.url} 
                      alt={`Client ${client.id}`} 
                      className="w-16 h-16 object-contain bg-white rounded-full grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>

        {/* Second row - moves right to left */}
        <div className="relative mb-12 overflow-hidden py-4">
          <div className="marquee reverse">
            <div className="marquee-content">
              {/* Repeat the second half clients multiple times to ensure no gaps */}
              {Array(4).fill().map((_, repeatIndex) => (
                clients.slice(9).map((client, index) => (
                  <div key={`row2-${repeatIndex}-${index}`} className="marquee-item">
                    <img 
                      src={client.url} 
                      alt={`Client ${client.id}`} 
                      className="w-16 h-16 object-contain bg-white rounded-full grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .reverse .marquee-content {
          animation: marquee-reverse 40s linear infinite;
        }

        .marquee-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          margin: 0 10px;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-80px * 9 * 2 - 20px * 9 * 2));
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(calc(-80px * 9 * 2 - 20px * 9 * 2));
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee:hover .marquee-content,
        .reverse:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LargeClientScroller;
