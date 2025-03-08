import React from "react";

function Footer() {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Video Background */}
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

      {/* Overlay Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between px-6 py-10 bg-opacity-70 text-white space-y-4 md:space-y-0">
          {/* Column 1: Logo and Address */}
          <div className="flex flex-col space-y-2">
            <img src="/logo.png" alt="Logo" className="h-12" />
            <p className="text-sm">1234 Street Name, City, Country</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: contact@company.com</p>
          </div>

          {/* Column 2: Social Media Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-lg">Facebook</a>
              <a href="https://twitter.com" className="text-lg">Twitter</a>
              <a href="https://instagram.com" className="text-lg">Instagram</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center py-4 bg-black bg-opacity-60 text-white">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
