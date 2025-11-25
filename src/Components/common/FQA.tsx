'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FQAProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  sectionClassName?: string;
  defaultOpenId?: string;
  allowMultipleOpen?: boolean;
}

const defaultFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'How do online lessons work?',
    answer:
      'Online lessons are conducted via video calls featuring interactive whiteboards, screen sharing, and engaging real-time Q&A sessions for enhanced learning.',
  },
  {
    id: '2',
    question: 'I just registered as a tutor. What should I do next?',
    answer:
      'After registering, complete your profile with your qualifications, experience, and teaching subjects. Then, wait for verification approval. Once verified, you can start receiving tutoring requests from students.',
  },
  {
    id: '3',
    question: 'Why should I get a tutor for my child?',
    answer:
      'A tutor provides personalized attention, helps identify learning gaps, builds confidence, and offers flexible scheduling that fits your child\'s needs and pace of learning.',
  },
  {
    id: '4',
    question: 'Can I change my tutor?',
    answer:
      'Yes, you can change your tutor at any time. Simply browse available tutors and select a new one that better matches your learning needs or preferences.',
  },
  {
    id: '5',
    question: 'What subjects can I learn?',
    answer:
      'We offer tutoring across a wide range of subjects including Mathematics, Science, Languages, Computer Science, Arts, and many more. Browse our subject categories to find what you need.',
  },
];

const FQA: React.FC<FQAProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'You might be having these questions too. These FAQs will definitely help clear up your confusion.',
  faqs = defaultFAQs,
  sectionClassName = '',
  defaultOpenId,
  allowMultipleOpen = false,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : [faqs[0]?.id || ''])
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (allowMultipleOpen) {
        // Allow multiple items to be open
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
      } else {
        // Only allow one item to be open at a time
        if (newSet.has(id)) {
          newSet.clear();
        } else {
          newSet.clear();
          newSet.add(id);
        }
      }
      return newSet;
    });
  };

  return (
    <section
      className={`px-4 max-w-6xl md:px-13 mx-auto py-8 md:py-12 lg:py-16 bg-white ${sectionClassName}`}
    >
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        {/* Icon and "FAQ" Text */}
        <div className="flex justify-center mb-3 md:mb-4">
          <ShieldIconWithText text="FAQ" iconSize="sm" textSize="sm" />
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* FAQ Accordion Items */}
      <div className="space-y-3 md:space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq) => {
          const isOpen = openItems.has(faq.id);
          return (
            <div
              key={faq.id}
              className={`
                rounded-xl border transition-all duration-300 overflow-hidden
                ${
                  isOpen
                    ? 'bg-[#FFFBF0] border-[#FFFBF0] shadow-sm'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                }
              `}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#ECBB4F] focus:ring-offset-2 rounded-xl"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black pr-4 flex-1">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 pb-4 md:pb-5">
                      <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FQA;
