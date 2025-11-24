'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';

interface FeatureCard {
  image: string;
  title: string;
  description: string;
}

interface UserTypeGroup {
  id: string;
  label: string;
  features: FeatureCard[];
}

const userTypeGroups: UserTypeGroup[] = [
  {
    id: 'parents-students',
    label: 'For Parents / Students',
    features: [
      {
        image: '/assets/scrabble-tiles.jpg', // Placeholder - replace with actual image
        title: 'Easy Sign Up',
        description: 'Create your free account in minutes and set your learning preferences.',
      },
      {
        image: '/assets/tutor-photo.jpg', // Placeholder - replace with actual image
        title: 'Explore Verified Tutors',
        description: 'Sign up for a free account in just a few minutes and personalize your learning settings.',
      },
      {
        image: '/assets/puzzle-piece.jpg', // Placeholder - replace with actual image
        title: 'Personalized Matching',
        description: 'Get tutor recommendations based on subject, grade, location, and learning style.',
      },
    ],
  },
  {
    id: 'tutors',
    label: 'For Tutors',
    features: [
      {
        image: '/assets/scrabble-tiles.jpg',
        title: 'Create Your Profile',
        description: 'Set up your professional profile showcasing your expertise and teaching style.',
      },
      {
        image: '/assets/tutor-photo.jpg',
        title: 'Get Verified',
        description: 'Complete our verification process to build trust with students and parents.',
      },
      {
        image: '/assets/puzzle-piece.jpg',
        title: 'Start Teaching',
        description: 'Connect with students who match your expertise and start your teaching journey.',
      },
    ],
  },
  {
    id: 'schools-colleges',
    label: 'For School Or Colleges',
    features: [
      {
        image: '/assets/scrabble-tiles.jpg',
        title: 'Register Institution',
        description: 'Sign up your institution and access our network of verified tutors.',
      },
      {
        image: '/assets/tutor-photo.jpg',
        title: 'Browse Tutors',
        description: 'Explore our database of qualified tutors across various subjects and levels.',
      },
      {
        image: '/assets/puzzle-piece.jpg',
        title: 'Connect & Collaborate',
        description: 'Partner with tutors to enhance your institution\'s educational offerings.',
      },
    ],
  },
];

const HowEudikaWorks = () => {
  const [selectedUserType, setSelectedUserType] = useState<string>('parents-students');

  const currentGroup = userTypeGroups.find((group) => group.id === selectedUserType) || userTypeGroups[0];

  return (
    <section className="px-4 max-w-6xl md:px-13 mx-auto md:pb-16 bg-white py-8 md:py-12 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-8">
        {/* Icon and "How its works" Text */}
        <div className="flex justify-center mb-3 md:mb-4">
          <ShieldIconWithText text="How its works" iconSize="sm" textSize="sm" />
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
          How Eudika Works
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-2xl mx-auto">
          Eudika connects students with verified tutors, simplifying learning through personalized guidance.
        </p>
      </div>

      {/* User Type Selection Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-8 md:mb-12">
        {userTypeGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => setSelectedUserType(group.id)}
            className={`
              w-full sm:w-auto px-5 md:px-7 py-2.5 md:py-3 rounded-xl
              text-sm sm:text-base font-medium transition-all duration-200
              ${
                selectedUserType === group.id
                  ? 'bg-[#ECBB4F] text-black shadow-sm'
                  : 'bg-white text-black border border-gray-300 hover:border-gray-400'
              }
            `}
            type="button"
          >
            {group.label}
          </button>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
        {currentGroup.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            {/* Feature Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-100">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="sans-serif" font-size="18"%3EImage%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            {/* Feature Content */}
            <div className="p-4 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Get Started Button */}
      <div className="flex justify-center w-full px-2 sm:px-4">
        <button
          className="
            py-3 sm:py-3.5 md:py-4 px-8 sm:px-10 md:px-12
            text-sm sm:text-base md:text-lg font-semibold
            bg-[#ECBB4F] hover:bg-yellow-400 text-black
            rounded-xl
            transition-colors duration-200 shadow-md hover:shadow-lg
            w-full sm:w-auto
          "
          type="button"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HowEudikaWorks;
