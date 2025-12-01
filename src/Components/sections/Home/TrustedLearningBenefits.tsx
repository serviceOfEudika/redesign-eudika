'use client';

import React from 'react';
import Image from 'next/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdSearch } from 'react-icons/md';
import { HiArrowUpRight } from 'react-icons/hi2';
import trustedImage from '@/public/assets/Trusted.png';

const benefits = [
  'One-on-one lessons tailored to individual needs.',
  'Learn from trusted, qualified, and experienced educators.',
  'Study anytime, online or offline, at your convenience.',
  'Boost academic performance, confidence, and long-term success.',
  'Access tutors across diverse subjects and skills.',
];

const TrustedLearningBenefits = () => {
  return (
    <section className="py-10 md:py-20  bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-13">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Left - Content */}
          <div className="text-gray-900 space-y-4">
            {/* Header with magnifying glass icon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
             text-sm font-semibold text-black">
              <MdSearch className='rotate-90' />
              <span className='text-xs tracking-[3.5px]'>Benefits</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold
             text-black leading-tight">
              Trusted Learning Benefits
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-xs md:text-sm text-[#4a4a4a] max-w-xl">
              Eudika offers personalized, flexible, and results-driven tuition. With verified tutors, students gain confidence, improve performance, and achieve long-term academic success both online and offline.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-3 text-xs md:text-sm text-[#4a4a4a]">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <IoIosCheckmarkCircle className='w-2 h-2 md:w-3 md:h-3 mt-0.5 shrink-0 text-black' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex justify-self-start">
              <button
                className="bg-[#edc623] hover:bg-yellow-500 cursor-pointer
                 text-black px-4 py-2 rounded-full flex items-center 
                 justify-center gap-2 mx-auto transition-colors text-xs md:text-sm shadow-md hover:shadow-lg"
                type="button"
              >
                <span>Start Learning Today</span>
                <HiArrowUpRight className="text-base rotate-45" />
              </button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative w-full justify-self-end md:w-full">
            

            <div className="relative rounded-[36px] bg-[#f6f7fb] p-3 shadow-xl">
              <Image
                src={trustedImage}
                alt="Adult and child engaged in learning activity with building blocks"
                className="h-full w-full rounded-[28px] object-cover"
                priority
                placeholder="blur"
              />
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedLearningBenefits;
