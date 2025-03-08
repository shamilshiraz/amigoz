import React from 'react';

function Intro() {
  return (
    <div className="sm:h-[75vh] w-full flex flex-col justify-evenly px-8 sm:px-20" style={{ padding: '30px' }}>
      <p className="text-4xl sm:text-8xl sm:text-left">
        Where creativity meets vision
      </p>
      
      <div className="w-full my-16">
        <img 
          src="./dubai.webp" 
          alt="Where creativity meets vision" 
          className="w-full h-24 object-cover rounded"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row w-full justify-evenly gap-4 py-16 space-y-4 sm:space-y-0 sm:space-x-4">
        <p>We specialize in turning ideas into stories that resonate, offering a seamless experience from concept to creation.</p>
        <p>Our team is driven by passion, delivering high-quality, impactful content that captures the essence of every project.</p>
        <p>With a focus on detail and craftsmanship, we bring unique perspectives that highlight the beauty in every frame.</p>
        <p>Collaborating with brands to create memorable experiences, we make sure every production reflects their identity and goals.</p>
      </div>
    </div>
  );
}

export default Intro;

