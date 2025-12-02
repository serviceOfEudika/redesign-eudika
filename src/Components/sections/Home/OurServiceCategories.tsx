'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import ShieldIconWithText from '../../common/ShieldIconWithText';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    title: 'Child Education',
    description: 'Tailored services for children with special needs, promoting inclusive education.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'English Version',
    description: 'Qualified English tutors dedicated to boosting your grades and preparing for exams.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Bangla Medium',
    description: 'Expert tutors for Bengali medium students, providing tailored guidance and strategies.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    title: 'Test Preparation',
    description: 'Personalized coaching for SSC, HSC, IELTS, GRE, GAT and competitive exams.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    title: 'Science & Math',
    description: 'Expert guidance in Science and Mathematics for all academic levels.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    title: 'Online Tutoring',
    description: 'Flexible online sessions with experienced tutors from anywhere.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
  },
];

export default function OurServiceCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContentRef.current;

    if (!scrollContainer || !scrollContent) return;

    // Get the width of a single set of categories
    const singleSetWidth = scrollContent.scrollWidth / 2;
    let isAdjusting = false;

    // Handle scroll to create infinite loop effect
    const handleScroll = () => {
      if (!scrollContainer || isAdjusting) return;

      const scrollLeft = scrollContainer.scrollLeft;
      
      // When scrolled past the first set, reset to beginning seamlessly
      if (scrollLeft >= singleSetWidth) {
        isAdjusting = true;
        scrollContainer.scrollLeft = scrollLeft - singleSetWidth;
        requestAnimationFrame(() => {
          isAdjusting = false;
        });
      }
      // When scrolled backwards past the start, jump to the end
      else if (scrollLeft <= 0) {
        isAdjusting = true;
        scrollContainer.scrollLeft = singleSetWidth;
        requestAnimationFrame(() => {
          isAdjusting = false;
        });
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    // Set initial scroll position to the start of the first duplicate
    scrollContainer.scrollLeft = 0;

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Duplicate categories for seamless infinite scroll
  const duplicatedCategories = [...serviceCategories, ...serviceCategories];

  return (
    <section className="bg-[#fafafa] py-10 md:py-20">
       
       <div className='max-w-6xl mx-auto px-4 md:px-13'>
       <div className="flex justify-start mb-4">
            <ShieldIconWithText text="services" iconSize="sm" textSize="sm" />
          </div>
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black  mb-4">
            Our Service Categories
          </h2>
          <p className="text-xs md:text-sm text-black  max-w-2xl">
            Our services are beneficial for students, parents, and <span className='hidden md:inline'><br /></span> institutions, aiming for fruitful learning experiences.
          </p>
        </div>
       </div>

      <div className="">
       

        {/* Horizontal Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-pointer"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
          }}
          onMouseDown={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.style.cursor = 'grabbing';
            }
          }}
          onMouseUp={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.style.cursor = 'grab';
            }
          }}
          onMouseLeave={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.style.cursor = 'grab';
            }
          }}
        >
          <div
            ref={scrollContentRef}
            className="flex gap-4  pb-4"
            style={{ width: 'max-content' }}
          >
            {duplicatedCategories.map((category, index) => (
              <div
                key={`${category.id}-${index}`}
                className="shrink-0 max-w-[280px] 
                 bg-white rounded-2xl  hover:shadow-lg transition-all 
                 duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Image Container */}
              <div className='p-4'>
                   

              <div className="relative w-full h-[150px] rounded-md overflow-hidden mb-3">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 350px"
                  />
                </div>

                {/* Content */}
                <div className="">
                  <h3 className="text-base md:text-lg font-bold text-black ">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#333333] leading-relaxed">
                    {category.description}
                  </p>
                </div>

              </div>


              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
