'use client';

import React from 'react';

export default function ExploreEudika() {
  return (
    <section className="bg-white pb-10 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 md:px-13 bg-[#fafafa] py-10 rounded-3xl">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl 
        font-bold text-black text-center
         mb-8">
          Explore Eudika
        </h2>

        {/* Two Cards Container */}
        <div className="flex gap-3 ">
          {/* Left Card - Request Tutors Now */}
          <div className="bg-[#fbf4d3] w-1/2 max-h-40 py-4
               rounded-3xl  flex flex-col items-center justify-center text-center">
           <div>
           <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black mb-3 ">
              Request Tutors Now
            </h3>
            <button
              className="bg-[#edc623]  cursor-pointer 
                text-black md:px-6 md:py-4 px-4 py-2 rounded-full 
                w-fit transition-colors text-[10px] md:text-xs 
                md:font-semibold shadow-md hover:shadow-lg"
              type="button"
            >
              Sign Up As For Free
            </button>
           </div>
          </div>

          {/* Right Card - Teach What You Love */}
          <div className="bg-[#fbf4d3] w-1/2 max-h-40 py-4
               rounded-3xl  flex flex-col items-center justify-center text-center">
           <div>
           <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black mb-3 ">
           Teach what you love
            </h3>
            <button
              className="bg-[#edc623]  cursor-pointer 
                text-black md:px-6 md:py-4 px-4 py-2 rounded-full 
                w-fit transition-colors text-[10px] md:text-xs 
                md:font-semibold shadow-md hover:shadow-lg"
              type="button"
            >
              Sign up as a tutor for free
            </button>
           </div>
          </div>

        </div>
      </div>
    </section>
  );
}
