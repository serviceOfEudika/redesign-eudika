'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  category: 'all' | 'students' | 'tutors' | 'institutions';
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Farhana Islam',
    role: 'Banker',
    text: 'Finding a trusted tutor for my daughter was incredibly easy with Eudika. The verified profiles, reviews, and flexible options gave me complete peace of mind, knowing she\'s learning safely with expert guidance.',
    rating: 5,
    category: 'students',
    image: '/assets/priya.png',
  },
  {
    id: '2',
    name: 'Sultana',
    role: 'Student',
    text: 'My tests felt stressful and my tutor guided me step by step. Thanks to this support, I gained confidence and fully achieved my goals.',
    rating: 5,
    category: 'students',
    image: '/assets/sarah.png',
  },
  {
    id: '3',
    name: 'Mahmud',
    role: 'Teacher',
    text: 'Teaching through Eudika has been amazing. I connected with motivated students, built meaningful relationships, and gained recognition in my teaching career while making a real impact.',
    rating: 5,
    category: 'tutors',
    image: '/assets/khan.png',
  },
  {
    id: '4',
    name: 'David Smith',
    role: 'Principal',
    text: 'Eudika has transformed how we connect with quality tutors. The platform\'s verification process and comprehensive profiles help us find the perfect educators for our institution.',
    rating: 5,
    category: 'institutions',
    image: '/assets/david.png',
  },
  {
    id: '5',
    name: 'Ayesha Khan',
    role: 'Student',
    text: 'The personalized matching on Eudika helped me find a tutor who understands my learning style. My grades have improved significantly!',
    rating: 5,
    category: 'students',
    image: '/assets/priya.png',
  },
  {
    id: '6',
    name: 'Rashid Ahmed',
    role: 'Tutor',
    text: 'As a tutor, Eudika provides me with verified students and a platform to showcase my expertise. The payment system is secure and reliable.',
    rating: 5,
    category: 'tutors',
    image: '/assets/khan.png',
  },
  {
    id: '7',
    name: 'King College',
    role: 'Institution',
    text: 'Partnering with Eudika has expanded our tutoring network. We now have access to verified tutors across multiple subjects, enhancing our educational offerings.',
    rating: 5,
    category: 'institutions',
    image: '/assets/king.png',
  },
];

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'students', label: 'Students' },
  { id: 'tutors', label: 'Tutors' },
  { id: 'institutions', label: 'Institutions' },
] as const;

const AUTO_PLAY_INTERVAL = 3500;

const LovedbyOurCommunity = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials = useMemo(() => {
    if (selectedFilter === 'all') {
      return testimonials;
    }
    return testimonials.filter((testimonial) => testimonial.category === selectedFilter);
  }, [selectedFilter]);

  // Infinite looping for autoplay
  useEffect(() => {
    if (filteredTestimonials.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [filteredTestimonials]);

  // Reset to center when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredTestimonials]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  // For three-card carousel effect, get left, center, and right index
  const getIndices = () => {
    const len = filteredTestimonials.length;
    if (!len) return [0, 0, 0];
    const center = currentIndex;
    const left = (center - 1 + len) % len;
    const right = (center + 1) % len;
    return [left, center, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getIndices();

  // Helpers for classnames
  function cardClass(pos: 'left' | 'center' | 'right') {
    if (pos === 'center') {
      return "z-20 scale-100 opacity-100 blur-none";
    }
    return "z-10 scale-90 opacity-80 blur-[2px] pointer-events-none select-none";
  }
  function containerMargin(pos: 'left' | 'center' | 'right') {
    // simulate cards peeking in/out
    if (pos === 'left') return "translate-x-[-60%] md:translate-x-[-80%]";
    if (pos === 'right') return "translate-x-[60%] md:translate-x-[80%]";
    return "";
  }

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-13">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4 md:mb-6">
            <ShieldIconWithText text="Testimonials" iconSize="sm" textSize="sm" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="text-3xl md:text-4xl font-bold">G</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#FFC107] text-xl md:text-2xl" />
              ))}
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Loved By Our Community
          </h2>
          <p className="text-sm md:text-base text-[#333333] max-w-3xl mx-auto">
            Eudika connects students, parents, tutors, and institutions with trust, proven results, and meaningful learning experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedFilter(option.id)}
              className={`
                relative rounded-full px-4 md:px-6 py-2 md:py-2.5
                text-xs md:text-sm font-medium
                transition-all duration-200 cursor-pointer
                ${selectedFilter === option.id
                  ? 'text-black'
                  : 'text-black border border-gray-300 hover:border-gray-400 bg-white'
                }
              `}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
              type="button"
            >
              {selectedFilter === option.id && (
                <span
                  className="absolute inset-0 z-10 bg-[#edc623] rounded-full"
                  style={{
                    transition: "background 0.3s",
                  }}
                />
              )}
              <span className="relative z-20">
                {option.label}
              </span>
            </button>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center select-none">
          {/* Blurry gradient at left/right for peek effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[12%] z-30 pointer-events-none"
            style={{
              background: "linear-gradient(to right,rgba(255,255,255,.95),rgba(255,255,255,0))"
            }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[12%] z-30 pointer-events-none"
            style={{
              background: "linear-gradient(to left,rgba(255,255,255,.95),rgba(255,255,255,0))"
            }}
          />
          {/* Arrows (desktop) */}
          <button
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-2 z-40 w-9 h-9 items-center justify-center rounded-full bg-white/70 hover:bg-white/90 shadow border border-gray-200 text-2xl text-gray-400 hover:text-gray-900 transition-all"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={handlePrev}
            tabIndex={0}
            type="button"
          >
            <span aria-hidden>&#8592;</span>
          </button>
          <button
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-2 z-40 w-9 h-9 items-center justify-center rounded-full bg-white/70 hover:bg-white/90 shadow border border-gray-200 text-2xl text-gray-400 hover:text-gray-900 transition-all"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={handleNext}
            tabIndex={0}
            type="button"
          >
            <span aria-hidden>&#8594;</span>
          </button>
          {/* Cards: center + left + right */}
          <div className="flex items-center justify-center w-full max-w-3xl mx-auto relative h-[370px] md:h-[370px]">
            {/* Left */}
            {filteredTestimonials.length > 0 &&
              <div
                className={`
                  absolute left-0 top-1/2
                  -translate-y-1/2 
                  w-2/3 md:w-1/2 ${cardClass('left')}
                  transition-all duration-500
                  ${containerMargin('left')}
                  `}
                style={{ pointerEvents: "none" }}
              >
                <TestimonialCard
                  testimonial={filteredTestimonials[leftIdx]}
                  blur
                  key={'card-left-' + leftIdx}
                />
              </div>
            }
            {/* Center */}
            {filteredTestimonials.length > 0 &&
              <div
                className={`
                  relative z-20 w-full md:w-2/3 
                  transition-all duration-500
                  `}
                style={{
                  margin: "0 auto",
                }}
              >
                <TestimonialCard
                  testimonial={filteredTestimonials[centerIdx]}
                  key={'card-center-' + centerIdx}
                />
              </div>
            }
            {/* Right */}
            {filteredTestimonials.length > 1 &&
              <div
                className={`
                  absolute right-0 top-1/2
                  -translate-y-1/2 
                  w-2/3 md:w-1/2 ${cardClass('right')}
                  transition-all duration-500
                  ${containerMargin('right')}
                  `}
                style={{ pointerEvents: "none" }}
              >
                <TestimonialCard
                  testimonial={filteredTestimonials[rightIdx]}
                  blur
                  key={'card-right-' + rightIdx}
                />
              </div>
            }
            {/* If no testimonials */}
            {filteredTestimonials.length === 0 &&
              <div className="bg-[#fef9e7] rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden 
                flex items-center justify-center min-h-[300px] text-gray-500 text-center border shadow w-full">
                No testimonials available for this category.
              </div>
            }
          </div>
        </div>
        {/* Dots/pagination */}
      
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  blur?: boolean;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, blur = false }) => {
  if (!testimonial) return null;
  return (
    <div
      className={`
        bg-[#fef9e7] rounded-2xl md:rounded-3xl p-5 md:p-10 relative overflow-hidden shadow transition-all duration-500
        flex flex-col justify-center items-center
        ${blur ? "opacity-70 blur-[2px] pointer-events-none select-none" : "opacity-100"}
        `}
      style={{ minHeight: 320, maxWidth: '440px', margin: 'auto' }}
    >
      {/* Large Quotation Marks */}
      <div className="absolute top-3 left-3 text-gray-300 text-5xl md:text-6xl font-serif leading-none select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="absolute top-3 right-3 text-gray-300 text-5xl md:text-6xl font-serif leading-none select-none pointer-events-none">
        &rdquo;
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Profile Picture and Info */}
        <div className="flex flex-col items-center mb-2 md:mb-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white border-2 border-white shadow-md mb-3">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 64px, 80px"
            />
          </div>
          <h3 className="text-base md:text-lg font-bold text-black mb-0">
            {testimonial.name}
          </h3>
          <p className="text-xs md:text-sm text-[#666666] font-medium">
            {testimonial.role}
          </p>
        </div>
        {/* Testimonial Text */}
        <p className="text-xs md:text-sm text-black leading-relaxed mb-6 md:mb-8 text-center">
          {testimonial.text}
        </p>
        {/* Google Logo and Rating */}
        <div className="flex items-center justify-center gap-1">
          <span className="text-lg md:text-xl font-bold text-[#4285F4]">G</span>
          <div className="flex gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-[#FFC107] text-sm md:text-base" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovedbyOurCommunity;