'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import { MdOutlineStar } from 'react-icons/md';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    if (filteredTestimonials.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [filteredTestimonials]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredTestimonials]);

  // 3-card logic
  const getIndices = () => {
    const len = filteredTestimonials.length;
    if (!len) return [0, 0, 0];
    const center = currentIndex;
    const left = (center - 1 + len) % len;
    const right = (center + 1) % len;
    return [left, center, right];
  };

  const [leftIdx, centerIdx, rightIdx] = getIndices();

  // Card transform helpers
  function cardClass(pos: 'left' | 'center' | 'right') {
    if (pos === 'center') {
      // Large and foremost
      return "z-20 scale-105 md:scale-110 opacity-100";
    }
    // Slightly smaller and faded for side cards, no blur
    return "z-10 scale-95 opacity-80 pointer-events-none select-none";
  }
  function containerMargin(pos: 'left' | 'center' | 'right') {
    // Add extra spacing among cards horizontally
    // Increase the translate-x values for more separation between cards
    if (pos === 'left') return "translate-x-[-45%] md:translate-x-[-48%]";
    if (pos === 'right') return "translate-x-[45%] md:translate-x-[48%]";
    return "";
  }

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-13">
        {/* Header Section */}
        <div className="text-center mb-8 ">
          <div className="flex justify-center  ">
            <ShieldIconWithText text="Testimonials" iconSize="sm" textSize="sm" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-3xl md:text-4xl font-bold">
              <Image
                src="/assets/google.png"
                alt="Google"
                width={22}
                height={22}
                className="inline-block mr-1 align-middle"
              />
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <MdOutlineStar key={i} className="text-[#FFC107] text-xl md:text-2xl" />
              ))}
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 ">
            Loved By Our Community
          </h2>
          <p className="text-xs md:text-sm text-[#333333] mx-auto">
            Eudika connects students, parents, tutors, and institutions with  <span className='hidden md:inline'><br /></span> trust, proven results,
             and meaningful learning experiences.
          </p>
        </div>

        {/* Animated Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 relative">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 relative">
            {/* Fallback is still just a map, but animate background using motion.div */}
            {filterOptions.map((option) => {
              const isSelected = selectedFilter === option.id;
              return (
                <motion.button
                  key={option.id}
                  onClick={() => setSelectedFilter(option.id)}
                  className={`
                    relative rounded-full px-4 md:px-6 py-2 md:py-2.5
                    text-xs md:text-sm font-medium
                    transition-all duration-200 cursor-pointer
                    overflow-hidden
                    ${isSelected
                      ? 'text-black'
                      : 'text-black border border-gray-300 hover:border-gray-400 bg-white'
                    }
                  `}
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                  }}
                  type="button"
                  whileTap={{ scale: 0.93 }}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="selectedFilterBg"
                      className="absolute inset-0 z-10 bg-[#edc623] rounded-full"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-20">{option.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center select-none">
          {/* Blurry gradient at left/right for peek effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[6%] z-30 pointer-events-none"
            style={{
              background: "linear-gradient(to right,rgba(255,255,255,.95),rgba(255,255,255,0))"
            }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[6%] z-30 pointer-events-none"
            style={{
              background: "linear-gradient(to left,rgba(255,255,255,.95),rgba(255,255,255,0))"
            }}
          />
          {/* Cards: center + left + right - Add horizontal gap using increased translate-x and also add some px gap */}
          <div className="flex items-center justify-center w-full max-w-3xl mx-auto 
          relative h-[270px] md:h-[280px]">
            {/* Left */}
            {filteredTestimonials.length > 0 &&
              <div
                className={`
                  absolute left-0 top-1/2
                  -translate-y-1/2 
                  w-11/12 md:w-3/4 ${cardClass('left')}
                  transition-all duration-500
                  ${containerMargin('left')}
                `}
                style={{ pointerEvents: "none" }}
              >
                <div className=""> {/* Add left/right margin for extra horizontal space */}
                  <TestimonialCard
                    testimonial={filteredTestimonials[leftIdx]}
                    key={'card-left-' + leftIdx}
                    variant="side"
                  />
                </div>
              </div>
            }
            {/* Center */}
            {filteredTestimonials.length > 0 &&
              <div
                className={`
                  relative z-20 w-full md:w-4/5 
                  transition-all duration-500
                `}
                style={{
                  margin: "0 auto",
                }}
              >
                <div className="mx-2 "> {/* Add horizontal margin */}
                  <TestimonialCard
                    testimonial={filteredTestimonials[centerIdx]}
                    key={'card-center-' + centerIdx}
                    variant="center"
                  />
                </div>
              </div>
            }
            {/* Right */}
            {filteredTestimonials.length > 1 &&
              <div
                className={`
                  absolute right-0 top-1/2
                  -translate-y-1/2 
                  w-11/12 md:w-3/4 ${cardClass('right')}
                  transition-all duration-500
                  ${containerMargin('right')}
                `}
                style={{ pointerEvents: "none" }}
              >
                <div className=""> {/* Add left/right margin for space */}
                  <TestimonialCard
                    testimonial={filteredTestimonials[rightIdx]}
                    key={'card-right-' + rightIdx}
                    variant="side"
                  />
                </div>
              </div>
            }
            {/* If no testimonials */}
            {filteredTestimonials.length === 0 &&
              <div className="bg-[#fef9e7] rounded-2xl md:rounded-3xl p-6 md:p-10 relative overflow-hidden 
                flex items-center justify-center min-h-[180px] text-gray-500 text-center border shadow w-full">
                No testimonials available for this category.
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  blur?: boolean;
  variant?: 'center' | 'side';
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, variant = 'center' }) => {
  if (!testimonial) return null;

  let containerClass = "flex flex-col  items-center";
  let styleOverrides: React.CSSProperties = {};
  let quoteSize = "text-3xl md:text-4xl";
  let imageClass = "w-12 h-12 md:w-14 md:h-14";
  let profileImgSize = "(max-width: 768px) 48px, 56px";
  let cardPadding = "p-3 md:p-5";
  let minHeight = 150;
  let maxWidth = '340px';

  if (variant === 'center') {
    cardPadding = "p-5 md:p-8";
    minHeight = 220;
    maxWidth = '440px';
    quoteSize = "text-4xl md:text-6xl";
    imageClass = "w-16 h-16 md:w-20 md:h-20";
    profileImgSize = "(max-width: 768px) 64px, 80px";
  } else {
    cardPadding = "p-2 md:p-3";
    minHeight = 125;
    maxWidth = '290px';
    quoteSize = "text-2xl md:text-3xl";
    imageClass = "w-10 h-10 md:w-12 md:h-12";
    profileImgSize = "(max-width: 768px) 40px, 48px";
    styleOverrides = { filter: 'blur(0px)' };
  }

  return (
    <div
      className={`
        bg-[#fdf9e9] rounded-2xl  ${cardPadding} shadow transition-all duration-500 relative opacity-100 
        ${containerClass}
      `}
      style={{
        minHeight: minHeight,
        maxWidth: maxWidth,
        margin: 'auto',
        ...styleOverrides,
      }}
    >
      {/* Large Quotation Marks */}
     

      {/* Content with gap-4 */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        {/* Profile Picture and Info */}
        <Image
          src="/assets/coma-left.png"
          alt="Decorative left quotation"
          width={32}
          height={32}
          className="absolute -top-5 left-10 md:left-5  w-10 h-10 md:w-20 md:h-20"
        />
        <Image
          src="/assets/coma-right.png"
          alt="Decorative right quotation"
          width={32}
          height={32}
          className="absolute top-10 right-10 md:right-5 w-10 h-10 md:w-20 md:h-20"
        />
        <div className="flex flex-col items-center gap-2 relative">
   
          
          <div className={`relative ${imageClass} rounded-full overflow-hidden
           bg-white border-2 border-white shadow-md mb-0`}>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes={profileImgSize}
            />
          </div>
          <h3 className="text-sm md:text-base font-bold text-black mb-0">
            {testimonial.name}
          </h3>
          <p className="text-[10px] md:text-xs text-black font-medium">
            {testimonial.role}
          </p>
        </div>
        {/* Testimonial Text */}
        <p className="text-xs md:text-sm text-black leading-relaxed mb-0 text-center">
          {testimonial.text}
        </p>
        {/* Google Logo and Rating */}
        <div className="flex items-center justify-center gap-1">
          <Image
            src="/assets/google.png"
            alt="Google"
            width={variant === "center" ? 20 : 16}
            height={variant === "center" ? 20 : 16}
            className="inline-block mr-1 align-middle"
          />
          <div className="flex gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <MdOutlineStar key={i} className={`text-[#FFC107] ${variant === "center" ? "text-xs md:text-base" : "text-xs"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovedbyOurCommunity;