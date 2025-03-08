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
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:underline text-sm">Home</a></li>
                <li><a href="#about" className="hover:underline text-sm">About</a></li>
                <li><a href="#services" className="hover:underline text-sm">Services</a></li>
                <li><a href="#contact" className="hover:underline text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <div className="flex flex-col space-x-4 justify-between">
                <a href="https://www.facebook.com/amigozproductionsme?mibextid=wwXIfr&rdid=Gowj70llPUKNHLZf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15heuBcnKG%2F%3Fmibextid%3DwwXIfr#" className="text-sm hover:underline">Facebook</a>
                <a href="https://x.com/amigozfilms?s=21&mx=2" className="text-sm hover:underline">Twitter</a>
                <a href="https://www.instagram.com/amigoz_productions/?utm_source=qr" className="text-sm hover:underline">Instagram</a>
                <a href="https://www.linkedin.com/company/amigozproductions/" className="text-sm hover:underline">LinkedIn</a>

              </div>
            </div>

            {/* Small Sentence */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
              <p className="text-sm">
              "Amigoz
creates
stunning
visual
content
with
cinematic
storytelling
innovative
editing
techniques
and
creative
direction
that
transforms
your
vision
into
reality"              </p>
            </div>

            {/* All Rights Reserved */}
            <div className="space-y-4">
              <p className="text-sm">&copy; {new Date().getFullYear()} amigoz productions. All Rights Reserved.</p>
              <img src="/a.png" alt="Logo" className="h-12" />

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
