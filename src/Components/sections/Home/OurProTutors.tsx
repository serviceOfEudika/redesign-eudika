'use client';

import React from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaEye, FaUser } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import Image from 'next/image';
import { IoMdShare } from "react-icons/io";
import batch_1 from '@/public/assets/batch-1.png';
import batch_2 from '@/public/assets/batch-2.png';
import blue_batch from '@/public/assets/blue-batch.png';
import { FaArrowUp } from "react-icons/fa6";
import king from '@/public/assets/king.png'
import quesion from '@/public/assets/question.png'
import khan from '@/public/assets/khan.png'
import sarah from '@/public/assets/sarah.png'
import priya from '@/public/assets/priya.png'
import david from '@/public/assets/david.png'

interface Tutor {
  id: number;
  name: string;
  image: string | StaticImageData;
  price: string;
  subjects: string[];
  location: string;
  experience: string;
  education: string[];
  experienceBadge: {
    top: string;
    bottom: string;
  };
}

// Utility to format image file name from tutor name, or return StaticImageData directly
const getTutorImage = (tutor: Tutor) => {
  // If it's an imported StaticImageData (like khan), return as is
  if (typeof tutor.image !== 'string') return tutor.image;
  // If path is default placeholder, return demo asset path (could extend for demo images)
  if (tutor.image === '/api/placeholder/300/300') {
    const nameSlug = tutor.name.trim().toLowerCase().replace(/[\s.]+/g, '-').replace(/[^a-z0-9-]/g, '');
    return `/assets/demo-tutors/${nameSlug}.png`;
  }
  // For any other string, just return as is
  return tutor.image;
};

const OurProTutors = () => {
  const tutors: Tutor[] = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      image: khan, // Use imported image object instead of string
      price: '4,500',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      location: 'Dhaka',
      experience: '10y',
      education: [
        'B.Sc. In Physics, University Of Dhaka',
        'M.Sc. In Applied Chemistry & Biology, University Of Toronto',
      ],
      experienceBadge: {
        top: 'Experience Of 10+ Years',
        bottom: 'Practical Lab-Based And Visual Teaching',
      },
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      image: sarah, // Replace with actual image path
      price: '10,000',
      subjects: ['Mathematics', 'Algebra'],
      location: 'Dhaka',
      experience: '7y',
      education: [
        'B.Sc. In Mathematics, University Of California, Berkeley',
        'M.Sc. In Applied Mathematics, Stanford University',
      ],
      experienceBadge: {
        top: 'Experienced Math Educator, 7+ Years',
        bottom: 'Patient, Problem-Solving, Results-Focused',
      },
    },
    {
      id: 3,
      name: 'Priya Sharma',
      image: priya, // Replace with actual image path
      price: '3,500',
      subjects: ['English', 'Creative Writing', 'IELTS'],
      location: 'Khulna',
      experience: '6y',
      education: [
        'B.A. In English Literature, Delhi University',
        'CELTA Certification, Cambridge University',
      ],
      experienceBadge: {
        top: 'Experience Of 6+ Years',
        bottom: 'IELTS, TOEFL, And Academic Writing Prep',
      },
    },
    {
      id: 4,
      name: 'David Lee',
      image: david, // Replace with actual image path
      price: '5,500',
      subjects: ['Computer Science', 'Coding'],
      location: 'Satkhira',
      experience: '8y',
      education: [
        'B.Sc. In Computer Science, MIT',
        'M.Sc. In Software Engineering, Carnegie Mellon University',
      ],
      experienceBadge: {
        top: 'Experience Of 8+ Years',
        bottom: 'Full-Stack Programming Python, Java, C++',
      },
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 md:px-13">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          {/* Icon and Tutors Text */}
          <div className="flex justify-center mb-4">
            <ShieldIconWithText text="Tutors" iconSize="sm" textSize="sm" />
          </div>
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-black mb-4">
            Our Pro Tutors
          </h2>
          {/* Description */}
          <p className="text-sm md:text-base text-[#333333] max-w-2xl mx-auto">
            Explore our certified professional tutors and find the{' '}
            <span className="hidden md:inline">
              <br />
            </span>
            perfect match for your learning journey today!
          </p>
        </div>

        {/* Tutor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-3 mb-10 md:mb-12">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-3xl p-4 flex flex-col w-full h-full"
            >
              {/* Profile Image Section */}
              <div className="relative ">
                <Image
                  src={getTutorImage(tutor)}
                  alt={tutor.name + " profile image"}
                  width={320}
                  height={320}
                  className=" object-cover rounded-2xl mb-2 w-full"
                  priority
                />

                {/* Share Icon Button */}
                <button
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm transition-colors"
                  aria-label="Share"
                  type="button"
                >
                  <IoMdShare className='text-black'/>
                </button>

                {/* Experience Badges Overlay */}
                <div className="absolute bottom-4 text-black left-2 right-3 flex flex-col gap-1">
                  <div className="bg-[#f7ed92] rounded-full py-1 px-2 flex w-fit items-center gap-1">
                    <Image
                      src={batch_1}
                      alt="Experience badge top"
                      width={20}
                      height={20}
                      className="w-3 h-3 object-contain"
                      priority
                      unoptimized={false}
                    />
                    <p className="font-bold text-[8px]">{tutor.experienceBadge.top}</p>
                  </div>
                  <div className="bg-[#f7ed92] rounded-full py-1 px-2 flex w-fit items-center gap-1">
                    <Image
                      src={batch_2}
                      alt="Experience badge bottom"
                      width={16}
                      height={16}
                      className="w-3 h-3 object-contain"
                      priority
                      unoptimized={false}
                    />
                    <p className="font-bold text-[8px]">{tutor.experienceBadge.bottom}</p>
                  </div>
                </div>
              </div>

              {/* Tutor Info Section */}
              <div className="flex flex-col flex-1 min-h-0">
                {/* Name and Verification */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs md:text-sm font-bold text-black">
                      {tutor.name}
                    </h3>
                    <Image
                      src={blue_batch}
                      alt="Verified Tutor Badge"
                      width={16}
                      height={16}
                      className="h-2.5 w-2.5 md:h-3 md:w-3 object-contain"
                    />
                  </div>
                  <FaArrowUp className='rotate-45 text-black' />
                </div>

                {/* Price and Pro Badge */}
                <div className="flex items-center justify-between ">

                  <span className=" text-black flex items-center gap-1">
                    <p className='text-sm md:text-lg font-bold'>{tutor.price} </p>
                    <p className='text-[10px] text-[#000000]'>/ Month</p>
                    <Image src={quesion} alt="money Badge" width={16} height={16}
                      className="w-2 h-2 md:h-2 md:w-2 object-contain self-start" />
                  </span>

                  <span className="bg-[#f7ed92] text-black text-[10px]
                  md:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Image src={king} alt="king Badge" width={16} height={16}
                      className="w-3 h-3 md:h-3.5 md:w-3.5 object-contain" />
                    <p> Pro</p>
                  </span>

                </div>

                {/* Subjects */}
                <p className="text-[10px]  text-[#000000] flex justify-between my-2">
                  {tutor.subjects.join(', ')}
                  <div className="flex items-center gap-1 text-gray-600">
                    <div className="flex items-center gap-0.5">
                      <Image src={batch_1} alt="king Badge" width={16} height={16}
                        className="w-2 h-2  object-contain" />
                      <span>{tutor.experience}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <FaMapMarkerAlt className="w-2 h-2" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>
                </p>

                {/* Location and Experience */}

                {/* Education */}
                <div className="flex flex-col justify-between h-full flex-1">
                  {/* Education */}
                  <div className="space-y-1.5">
                    {tutor.education.map((edu, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-[11px] text-[#000000]"
                      >
                        <FaGraduationCap className="w-3 h-3 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{edu}</span>
                      </div>
                    ))}
                  </div>
                  {/* Empty fragment for possible future spacing */}
                  {/* Action Buttons are outside this */}
                </div>

                {/* BUTTONS STICK TO END */}
                <div className="flex gap-2 button-container mt-6" >
                  <button
                    className="flex-1 bg-[#edc623] hover:bg-yellow-500
                      text-black py-1  rounded-full text-[9px] md:text-[11px] cursor-pointer
                      flex items-center justify-center gap-1 transition-colors "
                    type="button"
                  >
                    <FaEye className="md:w-3 md:h-3 w-2 h-2" />
                    <span>View</span>
                  </button>
                  <button
                    className="flex-1 bg-black hover:bg-gray-800
                      text-white  py-1  rounded-full flex items-center cursor-pointer
                      justify-center gap-1 transition-colors  text-[9px] md:text-[11px]"
                    type="button"
                  >
                    <FaUser className="md:w-3 md:h-3 w-2 h-2" />
                    <span>Request</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button
            className="bg-[#edc623] hover:bg-yellow-500
             text-black  px-4 py-2 rounded-full flex items-center cursor-pointer
             justify-center gap-2 mx-auto transition-colors text-xs md:text-sm  shadow-md hover:shadow-lg"
            type="button"
          >
            <span>View More</span>
            <HiArrowUpRight className="text-base rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProTutors;
