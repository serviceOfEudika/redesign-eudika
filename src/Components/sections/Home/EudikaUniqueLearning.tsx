'use client';

import React from 'react';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import { FaQuestion } from 'react-icons/fa';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    id: 'personalized',
    title: 'Personalized Learning',
    description: 'Tailored lessons to fit every student\'s pace, style, and academic needs.',
  },
  {
    id: 'expert',
    title: 'Expert Tutors',
    description: 'Highly qualified, experienced tutors dedicated to student success.',
  },
  {
    id: 'flexible',
    title: 'Flexible Methods',
    description: 'Choose between online interactive sessions or offline in-person guidance.',
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    description: 'Regular updates and reports to ensure steady improvement and confidence building.',
  },
];

const EudikaUniqueLearning = () => {
  return (
    <section className="bg-[#fafafa]  py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-13">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          {/* Shield Icon and "Unique Learning" text */}
          <div className="flex justify-center mb-4">
            <ShieldIconWithText text="Unique Learning" iconSize="sm" textSize="sm" />
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Eudika: Unique Learning
          </h2>

          {/* Descriptive Paragraph */}
          <p className="mx-auto mt-4 max-w-2xl text-xs md:text-sm text-[#4a4a4a]">
            Discover a wide selection of experienced local tutors ready to
            <span className='hidden md:inline'><br /></span> support your unique learning journey.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 transition-all cursor-pointer hover:shadow-lg relative"
            >
              {/* Yellow Circular Icon with Question Mark */}
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#edc623] rounded-full mb-4">
                <FaQuestion className="text-white text-xs md:text-lg font-bold" />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-black mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-[#4a4a4a] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EudikaUniqueLearning;
