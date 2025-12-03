'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { HiArrowUpRight } from 'react-icons/hi2';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import { 
  FaBookOpen, 
  FaFlask, 
  FaGlobe,
  FaCode,
  FaHistory,
  FaPalette
} from 'react-icons/fa';
import { MdScience, MdMenuBook } from 'react-icons/md';
import { PiMathOperations } from 'react-icons/pi';
import { BsSquare } from 'react-icons/bs';

interface SubjectCard {
  id: string;
  name: string;
  tutorCount: string;
  image?: string;
  icon?: React.ReactNode;
}

const subjects: SubjectCard[] = [
  {
    id: 'english-medium',
    name: 'English Medium Tutors',
    tutorCount: '1,718',
    image: '/assets/row-1-english-medium.png',
  },
  {
    id: 'public-university',
    name: 'Public University Tutors',
    tutorCount: '8,163',
    image: '/assets/row-1-public-tutors.png',
  },
  {
    id: 'maths',
    name: 'Maths Tutors',
    tutorCount: '16,434',
    image: '/assets/row-1-math-tutors.png',
  },
  {
    id: 'english-1',
    name: 'English Tutors',
    tutorCount: '12,829',
    image: '/assets/row-1-english-tutors.png',
  },
  {
    id: 'art-1',
    name: 'Art Tutors',
    tutorCount: '2,310',
    icon: <FaPalette className="text-2xl md:text-3xl" />,
  },
  {
    id: 'science-1',
    name: 'Science Tutors',
    tutorCount: '5,602',
    icon: <FaFlask className="text-2xl md:text-3xl" />,
  },
  {
    id: 'english-2',
    name: 'English Tutors',
    tutorCount: '8,220',
    icon: <FaBookOpen className="text-2xl md:text-3xl" />,
  },
  {
    id: 'history',
    name: 'History Tutors',
    tutorCount: '3,145',
    icon: <FaHistory className="text-2xl md:text-3xl" />,
  },
  {
    id: 'art-2',
    name: 'Art Tutors',
    tutorCount: '2,310',
    icon: <MdMenuBook className="text-2xl md:text-3xl" />,
  },
  {
    id: 'science-2',
    name: 'Science Tutors',
    tutorCount: '12,567',
    icon: <MdScience className="text-2xl md:text-3xl" />,
  },
  {
    id: 'english-3',
    name: 'English Tutors',
    tutorCount: '9,874',
    icon: <FaGlobe className="text-2xl md:text-3xl" />,
  },
  {
    id: 'programming',
    name: 'Programming Tutors',
    tutorCount: '5,432',
    icon: <FaCode className="text-2xl md:text-3xl" />,
  },
];

const BLUR_WIDTH = '48px';

const BlurSides: React.FC<{ className?: string }> = ({ className = '' }) => (
  <>
    {/* Left Blur */}
    <div
      className={`pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-[${BLUR_WIDTH}] z-10 ${className}`}
      style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.85) 70%, transparent 100%)',
        filter: 'blur(0px)',
      }}
    />
    {/* Right Blur */}
    <div
      className={`pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-[${BLUR_WIDTH}] z-10 ${className}`}
      style={{
        background: 'linear-gradient(to left, rgba(255,255,255,0.85) 70%, transparent 100%)',
        filter: 'blur(0px)',
      }}
    />
  </>
);

const MarqueeWithBlur: React.FC<React.ComponentProps<typeof Marquee>> = ({ children, className = '', ...props }) => (
  <div className="relative w-full">
    <BlurSides />
    <Marquee {...props} className={`${className} !pr-0 !pl-0`} style={{ marginLeft: 0, marginRight: 0 }}>
      {children}
    </Marquee>
  </div>
);

const SubjectTutorsDiscover = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-13">
        {/* Header Section */}
        <div className="text-center">
          {/* Checkmark Icon and "subjects" text */}
          <div className="flex justify-center mb-4">
            <ShieldIconWithText text="suject" iconSize="sm" textSize="sm" />
          </div>
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Subject Tutors Discover
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-xs md:text-sm text-black">
            Eudlika offers diverse tutoring options to suit every student&apos;s learning style.
          </p>
        </div>

        {/* Subject Cards Marquee - Multiple Rows for Grid Effect */}
        <div className="mt-10 md:mt-16 space-y-4 md:space-y-6">
          {/* Row 1 with Blur */}
          <MarqueeWithBlur
            speed={40}
            gradient={false}
            pauseOnHover={true}
            direction="left"
            className="overflow-hidden"
          >
            {subjects.slice(0, 4).map((subject) => (
              <div
                key={subject.id}
                className="mx-2  shrink-0 w-[200px] md:w-[260px] "
              >
                <div className="bg-[#fdf9e9] hover:bg-[#fef3c7] 
                 rounded-2xl  p-4 transition-all cursor-pointer 
                 h-full flex  items-center justify-between
                 hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-5">
                    {/* Image instead of Icon */}
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={subject.image || '/assets/row-1-english-medium.png'}
                        alt={subject.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    {/* Subject Name */}
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold text-black ">
                        {subject.name}
                      </h3>
                      {/* Tutor Count */}
                      <p className="text-[10px] md:text-xs text-black ">
                        {subject.tutorCount} Tutors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {subjects.slice(0, 4).map((subject) => (
              <div
                key={subject.id + '-dup'}
                className="mx-2  shrink-0 w-[200px] md:w-[260px] "
              >
                <div className="bg-[#fdf9e9] hover:bg-[#fef3c7] 
                 rounded-2xl  p-4 transition-all cursor-pointer 
                 h-full flex  items-center justify-between
                 hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center gap-5">
                    {/* Image instead of Icon */}
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={subject.image || '/assets/row-1-english-medium.png'}
                        alt={subject.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    {/* Subject Name */}
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold text-black ">
                        {subject.name}
                      </h3>
                      {/* Tutor Count */}
                      <p className="text-[10px] md:text-xs text-black ">
                        {subject.tutorCount} Tutors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </MarqueeWithBlur>

          {/* Row 2 with Blur */}
          <MarqueeWithBlur
            speed={45}
            gradient={false}
            pauseOnHover={true}
            direction="right"
            className="overflow-hidden"
          >
            {subjects.slice(4, 8).map((subject) => (
              <div
                key={subject.id}
                className="mx-2 md:mx-3 shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]"
              >
                <div className="bg-[#fef9e7] hover:bg-[#fef3c7] rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all cursor-pointer h-full flex flex-col items-center justify-center text-center min-h-[180px] md:min-h-[200px] hover:scale-105 hover:shadow-lg">
                  <div className="mb-3 md:mb-4 text-black">
                    {subject.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-black mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-xs md:text-sm text-black font-medium">
                    {subject.tutorCount} Tutors
                  </p>
                </div>
              </div>
            ))}
            {subjects.slice(4, 8).map((subject) => (
              <div
                key={`${subject.id}-dup`}
                className="mx-2 md:mx-3 shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]"
              >
                <div className="bg-[#fef9e7] hover:bg-[#fef3c7] rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all cursor-pointer h-full flex flex-col items-center justify-center text-center min-h-[180px] md:min-h-[200px] hover:scale-105 hover:shadow-lg">
                  <div className="mb-3 md:mb-4 text-black">
                    {subject.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-black mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-xs md:text-sm text-black font-medium">
                    {subject.tutorCount} Tutors
                  </p>
                </div>
              </div>
            ))}
          </MarqueeWithBlur>

          {/* Row 3 with Blur */}
          <MarqueeWithBlur
            speed={50}
            gradient={false}
            pauseOnHover={true}
            direction="left"
            className="overflow-hidden"
          >
            {subjects.slice(8, 12).map((subject) => (
              <div
                key={subject.id}
                className="mx-2 md:mx-3 shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]"
              >
                <div className="bg-[#fef9e7] hover:bg-[#fef3c7] rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all cursor-pointer h-full flex flex-col items-center justify-center text-center min-h-[180px] md:min-h-[200px] hover:scale-105 hover:shadow-lg">
                  <div className="mb-3 md:mb-4 text-black">
                    {subject.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-black mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-xs md:text-sm text-black font-medium">
                    {subject.tutorCount} Tutors
                  </p>
                </div>
              </div>
            ))}
            {subjects.slice(8, 12).map((subject) => (
              <div
                key={`${subject.id}-dup`}
                className="mx-2 md:mx-3 shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]"
              >
                <div className="bg-[#fef9e7] hover:bg-[#fef3c7] rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all cursor-pointer h-full flex flex-col items-center justify-center text-center min-h-[180px] md:min-h-[200px] hover:scale-105 hover:shadow-lg">
                  <div className="mb-3 md:mb-4 text-black">
                    {subject.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-black mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-xs md:text-sm text-black font-medium">
                    {subject.tutorCount} Tutors
                  </p>
                </div>
              </div>
            ))}
          </MarqueeWithBlur>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 md:mt-12">
          <button
            className="bg-[#edc623] hover:bg-yellow-500 cursor-pointer 
              text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full flex items-center 
              gap-2 mx-auto transition-colors text-sm md:text-base shadow-md hover:shadow-lg"
            type="button"
          >
            <span>View More</span>
            <HiArrowUpRight className="text-base md:text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubjectTutorsDiscover;
