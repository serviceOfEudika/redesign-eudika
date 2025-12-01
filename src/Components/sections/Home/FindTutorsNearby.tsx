'use client';

import React from 'react';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { HiInformationCircle } from 'react-icons/hi';
import bangladeshMap from '@/public/assets/bangladesh.png';
import ShieldIconWithText from '../../common/ShieldIconWithText';

interface CityCard {
  id: string;
  name: string;
  tutorCount: string;
}

const cities: CityCard[] = [
  {
    id: 'dhaka',
    name: 'Dhaka',
    tutorCount: '8,500+ Verified Tutors',
  },
  {
    id: 'chattogram',
    name: 'Chattogram',
    tutorCount: '3,200+ Verified Tutors',
  },
  {
    id: 'sylhet',
    name: 'Sylhet',
    tutorCount: '1,800+ Verified Tutors',
  },
  {
    id: 'rajshahi',
    name: 'Rajshahi',
    tutorCount: '2,400+ Verified Tutors',
  },
];

const FindTutorsNearby = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-13">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          {/* Checkmark Icon and "Find tutor" text */}
          <div className="flex justify-center mb-4">
            <ShieldIconWithText text="Find tutor" iconSize="sm" textSize="sm" />
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Find Tutors Nearby
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-xs md:text-sm text-black">
            Explore a diverse range of tutors available in your area, tailored to
             <span className="hidden md:inline"><br /></span> meet your educational needs and preferences.
          </p>
        </div>

        {/* Main Content: Map and City Cards */}
        <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
          {/* Left Section: Bangladesh Map */}
          <div className=" w-full">
            <div className="relative w-full aspect-square max-w-full
             h-auto rounded-2xl md:rounded-3xl overflow-hidden ">
              <Image
                src={bangladeshMap}
                alt="Bangladesh Map showing tutor locations"
                fill
                className="object-contain "
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Section: City Cards */}
          <div className=" w-full ">
            {/* City Cards Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 ">
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="bg-[#f9f7f7] hover:bg-[#eeeeee] 
                  rounded-xl md:rounded-2xl p-4 md:p-6 transition-all 
                  cursor-pointer relative group hover:shadow-lg"
                >
                  {/* Info Icon */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <HiInformationCircle className="text-gray-400 group-hover:text-gray-600 text-lg md:text-xl transition-colors" />
                  </div>

                  {/* City Name */}
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2 pr-8">
                    {city.name}
                  </h3>

                  {/* Tutor Count */}
                  <p className="text-xs md:text-sm text-black font-medium">
                    {city.tutorCount}
                  </p>
                </div>
              ))}
            </div>

            {/* View More Location Button */}
            <div className="w-full flex justify-center">
              <button
                className="bg-[#edc623] hover:bg-yellow-500 cursor-pointer 
                  text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full flex items-center 
                  gap-2 w-fit justify-center transition-colors text-sm
                   md:text-base shadow-md hover:shadow-lg"
                type="button"
              >
                <span>View More Location</span>
                <HiArrowUpRight className="text-base md:text-lg rotate-45" />
              </button>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTutorsNearby;
