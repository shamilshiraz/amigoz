import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <div className='relative h-[50vh] w-full bg-[#1e1e1e] text-white overflow-hidden '>
      {/* Big background text */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <h1 className='text-[20vw] font-extrabold text-[#2a2a2a] select-none'>amigoz</h1>
      </div>
      
      {/* Footer content container - maintains h-full to preserve height */}
      <div className='relative z-10 h-full w-full flex flex-col justify-between px-6 py-12'>
        
        {/* Main content in columns - centered with max width */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full' style={{margin:'30px'}}>
          {/* Column 1: Logo and tagline */}
          <div>
            <h2 className='text-3xl font-bold'>amigoz</h2>
            <p className='text-gray-400 mt-2'>Creating awesome experiences</p>
            
            {/* Contact info */}
            <div className='mt-6 space-y-3'>
              <div className='flex items-center gap-2'>
                <Mail size={16} />
                <a href="mailto:hello@amigoz.com" className='hover:underline'>hello@amigoz.com</a>
              </div>
              <div className='flex items-center gap-2'>
                <Phone size={16} />
                <a href="tel:+1234567890" className='hover:underline'>+123 456 7890</a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Navigation links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <nav>
              <ul className='space-y-3'>
                <li><a href="/" className='hover:text-gray-300 transition-colors'>Home</a></li>
                <li><a href="/about" className='hover:text-gray-300 transition-colors'>About</a></li>
                <li><a href="/services" className='hover:text-gray-300 transition-colors'>Services</a></li>
                <li><a href="/portfolio" className='hover:text-gray-300 transition-colors'>Portfolio</a></li>
                <li><a href="/contact" className='hover:text-gray-300 transition-colors'>Contact</a></li>
              </ul>
            </nav>
          </div>
          
          {/* Column 3: Social links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Connect With Us</h3>
            <div className='flex gap-4'>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full hover:bg-[#2a2a2a] transition-colors' aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='p-2 rounded-full hover:bg-[#2a2a2a] transition-colors' aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
            
            <div className='mt-6'>
              <p className='text-sm text-gray-400'>
                Subscribe to our newsletter for the latest updates and offers.
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright footer - now spans full width */}
        <div className='w-full border-t border-gray-800'>
          <div className=' mx-auto w-full py-6 px-6'>
            <div className='text-sm text-gray-400 flex justify-center'>
              &copy; {new Date().getFullYear()} amigoz. All rights reserved.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;