'use client';

import React from 'react';
import Image from 'next/image';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import achievementsImage from '@/public/assets/OurAchievements.png';

const OurAchievements = () => {
  return (
    <section className="py-10 md:py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 md:px-13">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Left - Content */}
          <div className="text-gray-900 space-y-4">
            {/* Header with Shield Icon */}
            <div className="flex justify-start">
              <ShieldIconWithText text="Awards" iconSize="sm" textSize="sm" />
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold
             text-black leading-tight">
              Our Achievements
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-xs md:text-sm text-[#4a4a4a] max-w-xl">
              Eudika is recognized for excellence, innovation, and trusted tutoring across Bangladesh.
            </p>
          </div>

          {/* Right - Award Card */}
          <div className="relative w-fit justify-self-end">
            <div className="bg-[#fbf4d3] rounded-2xl p-5 shadow-lg">
              {/* Award Badge Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src={achievementsImage}
                    alt="2024 South Asia EdTech Award Badge"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                    priority
                  />
                </div>
              </div>

              {/* Award Title */}
              <h3 className="text-xs md:text-sm font-bold text-black mb-3 text-center">
                2024 SOUTH ASIA EDTECH
              </h3>

              {/* Award Description */}
              <p className="text-[10px] md:text-xs  text-[#969696] text-center leading-relaxed">
                Celebrated for pioneering and adaptable online education 
                <span className='hidden md:inline'><br /></span> solutions that empower learners and educators alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
