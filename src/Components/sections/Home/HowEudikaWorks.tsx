'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import { FaArrowUp } from 'react-icons/fa';

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

// Only use relative public folder paths (no leading slash) for Next.js Image if in public folder
const featureImages = [
  '/assets/feature-1.png',
  '/assets/feature-2.png',
  '/assets/feature-3.png',
];

const userTypeGroups: UserTypeGroup[] = [
  {
    id: 'parents-students',
    label: 'For Parents / Students',
    features: [
      {
        image: featureImages[0],
        title: 'Easy Sign Up',
        description: 'Create your free account in minutes and set your learning preferences.',
      },
      {
        image: featureImages[1],
        title: 'Explore Verified Tutors',
        description: 'Sign up for a free account in just a few minutes and personalize your learning settings.',
      },
      {
        image: featureImages[2],
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
        image: featureImages[0],
        title: 'Create Your Profile',
        description: 'Set up your professional profile showcasing your expertise and teaching style.',
      },
      {
        image: featureImages[1],
        title: 'Get Verified',
        description: 'Complete our verification process to build trust with students and parents.',
      },
      {
        image: featureImages[2],
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
        image: featureImages[0],
        title: 'Register Institution',
        description: 'Sign up your institution and access our network of verified tutors.',
      },
      {
        image: featureImages[1],
        title: 'Browse Tutors',
        description: 'Explore our database of qualified tutors across various subjects and levels.',
      },
      {
        image: featureImages[2],
        title: 'Connect & Collaborate',
        description: "Partner with tutors to enhance your institution's educational offerings.",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const HowEudikaWorks = () => {
  const [selectedUserType, setSelectedUserType] = useState<string>('parents-students');

  const currentGroup = userTypeGroups.find((group) => group.id === selectedUserType) || userTypeGroups[0];

  const displayedFeatures = useMemo(() => {
    return currentGroup?.features ?? [];
  }, [currentGroup]);

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
        <p className="text-sm md:text-base  text-[#333333] max-w-2xl mx-auto">
          Eudika connects students with verified tutors, simplifying <span className='hidden md:inline'><br /></span> learning through personalized guidance.
        </p>
      </div>

      {/* User Type Selection Buttons with Animated Tabs */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-8  ">

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 ">
          {userTypeGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedUserType(group.id)}
              className={`
                relative rounded-full px-4 py-2
                md:text-sm text-xs font-medium
                transition-all duration-200 cursor-pointer
                ${
                  selectedUserType === group.id
                    ? 'text-black'
                    : 'text-black border border-gray-300 hover:border-gray-400 bg-[#ffffff]'
                }
              `}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
              type="button"
            >
              {selectedUserType === group.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 z-10 bg-[#ECBB4F] rounded-full"
                  transition={{
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
              <span className="relative z-20">
                {group.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Feature Cards with AnimatePresence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mb-8 md:mb-12">
        <AnimatePresence>
          {displayedFeatures.length === 0 ? (
            <motion.p
              key="no-features"
              className="text-gray-500 mt-4 col-span-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No features available for this tab.
            </motion.p>
          ) : (
            displayedFeatures.map((feature, index) => (
              <motion.div
                key={`${selectedUserType}-${feature.title}-${index}`}
                className="bg-[#fafafa] rounded-2xl 
                overflow-hidden cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Feature Image */}
                <div className="relative w-full  h-[220px] md:h-[250px] ">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-3xl p-3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    // Remove onError handler: Next.js <Image> does not support this
                    // and it will cause hydration/image errors
                    priority={index === 0}
                  />
                </div>

                {/* Feature Content */}
                <div className="p-3">
                  <h3 className=" text-sm md:text-base font-bold text-black my-2">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] md:text-xs  text-[#333333] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Get Started Button */}
      <div className="text-center">
        <button
          className="bg-[#edc623] hover:bg-yellow-500 cursor-pointer
             text-black  px-4 py-2 rounded-full flex items-center 
             justify-center gap-2 mx-auto transition-colors text-xs md:text-sm  shadow-md hover:shadow-lg"
          type="button"
        >
          <span>Get Started</span>
          <FaArrowUp className='rotate-90' />
        </button>
      </div>
    </section>
  );
};

export default HowEudikaWorks;
