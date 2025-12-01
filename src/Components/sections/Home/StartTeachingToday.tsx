'use client';

import React from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { HiArrowRight } from 'react-icons/hi';
import { IoIosCheckmarkCircle } from "react-icons/io";
import startRight from '@/public/assets/start-right.png';
import start1 from '@/public/assets/start-1.png';
import start2 from '@/public/assets/start-2.png';
import start3 from '@/public/assets/start-3.png';
import { FaArrowUp } from 'react-icons/fa';
import { MdSearch } from "react-icons/md";
import { HiArrowUpRight } from 'react-icons/hi2';

const highlights = [
  'Flexible teaching opportunities (online & in-person)',
  'Grow your reputation with reviews & ratings',
  '100% trusted, verified parents & students',
  'Earn securely with guaranteed payments',
  'Verified tuition jobs in your area',
];

const StartTeachingToday = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Left - Content */}
          <div className="text-gray-900 space-y-4">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
             text-sm font-semibold text-black">
              <MdSearch className=' rotate-90' />
              <span className='text-xs tracking-[3.5px]'>For Tutors</span>
            </div>

            <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold
             text-black leading-tight">
              Start Teaching Today
            </h2>

            <p className=" text-xs md:text-sm text-[#4a4a4a] max-w-xl">
              Find verified tuition jobs in your city or online and join thousands of dedicated tutors
              already teaching with Eudica. Explore flexible opportunities that fit your skills and schedule,
              with 100% verified home tuition jobs added every month.
            </p>

            <ul className=" space-y-3 text-xs md:text-sm  text-black ">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <IoIosCheckmarkCircle className='w-2 h-2 md:w-3 md:h-3' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-self-start ">
        <button
          className="bg-[#edc623] hover:bg-yellow-500 cursor-pointer
             text-black  px-4 py-2 rounded-full flex items-center 
             justify-center gap-2 mx-auto transition-colors text-xs md:text-sm  shadow-md hover:shadow-lg"
          type="button"
        >
          <span>Search Tuition</span>
          <HiArrowUpRight className="text-base rotate-45" />
        </button>
            </div>

          </div>

          {/* Right - Hero Image */}
          <div className="relative w-[80%] justify-self-end md:w-full">
            <div className="absolute -top-6 right-6 hidden h-12 w-28 rounded-full bg-[#fde68a] blur-3xl md:block" aria-hidden />

            <div className="relative rounded-[36px] bg-[#f6f7fb] p-3 shadow-xl">
              <Image
                src={startRight}
                alt="Tutor interacting with student"
                className="h-full w-full rounded-[28px] object-cover"
                priority
                placeholder="blur"
              />

              <div className="absolute -bottom-6 -left-18 flex flex-col items-center gap-4 rounded-2xl bg-[#f7ec9199]
               px-4 py-3 shadow-2xl md:px-6">

                <div className="flex -space-x-3">
                  {[start1, start2, start3].map((img, idx) => (
                    <div key={`overlay-${idx}`} className="md:h-8 md:w-8 h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-[#fef3c7]">
                      <Image
                        src={img}
                        alt={`Tutor avatar ${idx + 1}`}
                        className="h-full w-full object-cover"
                        placeholder="blur"
                      />
                    </div>
                  ))}
                  <div className="flex md:h-8 md:w-8 h-6 w-6 items-center justify-center rounded-full
                   border-2 border-white bg-black text-white text-sm font-semibold">
                    +
                  </div>
                </div>

                <div>
                  <p className=" text-xs md:text-sm  text-black">600+ Teachers</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default StartTeachingToday;