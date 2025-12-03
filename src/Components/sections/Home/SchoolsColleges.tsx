'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ShieldIconWithText from '../../common/ShieldIconWithText';
import { HiArrowUpRight } from 'react-icons/hi2';
import school1 from '@/public/assets/school-1.png';
import school2 from '@/public/assets/school-2.png';
import school3 from '@/public/assets/school-3.png';
import school4 from '@/public/assets/school-4.png';
import { MdSearch } from 'react-icons/md';

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
        

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
             text-sm font-semibold text-black">
              <MdSearch className='rotate-90' />
              <span className='text-xs tracking-[3.5px]'>Institution</span>
            </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-black mb-4">
            Schools, Colleges & <br /> Coaching Centers With Us
          </h2>
          
          <p className="text-sm md:text-base text-black max-w-2xl">
            Eudika connects schools, colleges, and coaching centers with <br /> parents and students for trusted learning.
          </p>
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {institutions.map((institution) => (
            <div
              key={institution.id}
              className="bg-[#fafafa] rounded-2xl overflow-hidden relative 
              group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Card Content Container */}
              <div className="pl-4 pr-4 pt-4 pb-0relative">
                {/* Yellow Arrow Icon - positioned at top-left, behind image */}
               <div className='flex items-start justify-between w-full'>
               <div className="flex items-center justify-center rounded-full
                   bg-[#edc623] h-8 w-8">
                    <HiArrowUpRight className="text-sm text-white" />
                  </div>

                {/* Image Container - overlapping the icon */}
                
                <div className="relative md:w-[70%] w-[50%] h-[90px]  rounded-lg overflow-hidden mb-4 z-20">
                  <Image
                    src={institution.image}
                    alt={institution.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
               </div>

                {/* Content */}
                <div className="relative -top-5">
                  <h3 className=" text-xs md:text-sm font-bold text-black mb-2">
                    {institution.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-black leading-relaxed">
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
