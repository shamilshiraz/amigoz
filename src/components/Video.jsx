import React from 'react';

const VideoGrid = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Mobile: 4x1 (vertical stack) or 2x2 grid, Desktop: 1x4 (horizontal row) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-full h-full gap-0">
        {/* Video 1 */}
        <div className="bg-black flex items-center justify-center h-full">
          <div className="w-full h-full bg-gray-800 relative">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              loop 
              muted
            >
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
        
        {/* Video 2 */}
        <div className="bg-black flex items-center justify-center h-full">
          <div className="w-full h-full bg-gray-800 relative">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              loop 
              muted
            >
              <source src="./vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
        
        {/* Video 3 */}
        <div className="bg-black flex items-center justify-center h-full">
          <div className="w-full h-full bg-gray-800 relative">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              loop 
              muted
            >
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
          </div>
        </div>
        
        {/* Video 4 */}
        <div className="bg-black flex items-center justify-center h-full">
          <div className="w-full h-full bg-gray-800 relative">
            <video 
              className="absolute inset-0 w-full h-full object-cover "
              autoPlay 
              loop 
              muted
            >
              <source src="./vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;