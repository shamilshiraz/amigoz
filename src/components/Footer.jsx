import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <div className="bg-black text-white py-10 border-t" style={{marginInline:'15px',paddingBlock:'10px'}}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-[15px]">
            {/* Sitemap */}
            <div className="space-y-4">
              <img src="/a.png" alt="Logo" className="h-12" />
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-sm">Home</a></li>
                <li><a href="#" className="hover:underline text-sm">About</a></li>
                <li><a href="#" className="hover:underline text-sm">Services</a></li>
                <li><a href="#" className="hover:underline text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Follow Us</h3>
              <div className="flex flex-col space-x-4 justify-between">
                <a href="https://facebook.com" className="text-sm hover:underline">Facebook</a>
                <a href="https://twitter.com" className="text-sm hover:underline">Twitter</a>
                <a href="https://instagram.com" className="text-sm hover:underline">Instagram</a>
              </div>
            </div>

            {/* Small Sentence */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>

            {/* All Rights Reserved */}
            <div className="space-y-4">
              <p className="text-sm">&copy; {new Date().getFullYear()} amigoz ad venture. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[50vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/footer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Footer;
