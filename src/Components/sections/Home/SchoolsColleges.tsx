'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ShieldIconWithText from '../../common/ShieldIconWithText';
import { HiArrowUpRight } from 'react-icons/hi2';
import school1 from '@/public/assets/school-1.png';
import school2 from '@/public/assets/school-2.png';
import school3 from '@/public/assets/school-3.png';
import school4 from '@/public/assets/school-4.png';

interface InstitutionCard {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const institutions: InstitutionCard[] = [
  {
    id: '1',
    title: 'School',
    description: "Unlock your potential with Eudika's expert tutors today!",
    image: school1,
  },
  {
    id: '2',
    title: 'Colleges',
    description: "Unlock your potential with Eudika's expert tutors today!",
    image: school2,
  },
  {
    id: '3',
    title: 'Coaching',
    description: "Unlock your potential with Eudika's expert tutors today!",
    image: school3,
  },
  {
    id: '4',
    title: 'Universities',
    description: "Unlock your potential with Eudika's expert tutors today!",
    image: school4,
  },
];

export default function SchoolsColleges() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-13">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <ShieldIconWithText text="Institution" iconSize="sm" textSize="sm" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Schools, Colleges & Coaching Centers With Us
          </h2>
          
          <p className="text-sm md:text-base text-gray-600 max-w-2xl">
            Eudika connects schools, colleges, and coaching centers with parents and students for trusted learning.
          </p>
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {institutions.map((institution) => (
            <div
              key={institution.id}
              className="bg-white rounded-2xl overflow-hidden relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card Content Container */}
              <div className="p-4 md:p-5 relative">
                {/* Yellow Arrow Icon - positioned at top-left, behind image */}
                <div className="absolute top-4 left-4 md:top-5 md:left-5 z-10">
                  <div className="flex items-center justify-center rounded-full bg-[#edc623] w-10 h-10 md:w-12 md:h-12">
                    <HiArrowUpRight className="text-lg md:text-xl text-white" />
                  </div>
                </div>

                {/* Image Container - overlapping the icon */}
                <div className="relative w-full h-[180px] md:h-[200px] lg:h-[220px] rounded-lg overflow-hidden mb-4 z-20">
                  <Image
                    src={institution.image}
                    alt={institution.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="mt-2">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                    {institution.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {institution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
