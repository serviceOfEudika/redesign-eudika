'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ShieldIconWithText from '@/src/Components/common/ShieldIconWithText';
import { HiArrowUpRight } from 'react-icons/hi2';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import choosesLeft from '@/public/assets/chooses-left.png';
import choosesRight from '@/public/assets/chooses-right.png';
import bgMixLeft from '@/public/assets/bg-mix-left.png';
import bgMixRight from '@/public/assets/bg-mix-right.png';
import { FaArrowUp } from 'react-icons/fa';

interface MethodCard {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  image: StaticImageData;
  pattern: StaticImageData;
}

const methods: MethodCard[] = [
  {
    id: 'online',
    title: 'Online Tutoring Method',
    description:
      'Learn anywhere with live sessions, connecting via video calls, whiteboards, and screen sharing.',
    highlights: [
      'Real-time lessons from home or any location',
      'Flexible scheduling to fit your routine',
      'Access top tutors regardless of location',
      'Track progress with lesson reports and feedback',
      'Interactive tools: whiteboards, quizzes, exercises',
    ],
    cta: 'Online Lessons',
    image: choosesLeft,
    pattern: bgMixLeft,
  },
  {
    id: 'offline',
    title: 'Offline Tutoring Method',
    description:
      'Personalized one-on-one learning at home or nearby, with hands-on guidance for understanding.',
    highlights: [
      'Great for practical subjects and exam prep',
      'Face-to-face interaction for better engagement',
      'Immediate feedback and concept clarification',
      'Learning in a comfortable, focused environment',
      'Customized lesson plans based on student needs',
    ],
    cta: 'Private Tutor',
    image: choosesRight,
    pattern: bgMixRight,
  },
];

const ChooseYourLearningStyle = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-13">
        <div className="text-center">
          <ShieldIconWithText
            text="Tutoring method"
            iconSize="sm"
            textSize="sm"
            className="justify-center text-[#000000]"
            textClassName="tracking-[5px] text-[#000000]"
          />
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-black ">
            Choose Your Learning Style
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs text-[#000000] md:text-sm">
            Eudica provides online, in-person, and group tutoring <span className='hidden md:inline'><br /></span> methods for personalized learning.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 ">
          {methods.map((method) => (
            <article
              key={method.id}
              className="relative overflow-hidden rounded-[32px] 
               pl-6 pr-6 pt-6 pb-0 bg-[#fafafa] "
            >


              <div className="flex flex-col  w-full h-full">

                <div className="flex  justify-between w-full">

                  <div className="flex items-center justify-center rounded-full
                   bg-[#edc623] min-w-[44px] min-h-[44px] h-11 w-11 md:h-12 md:w-12">
                    <HiArrowUpRight className="text-lg md:text-2xl text-white" />
                  </div>

                  <div className="flex items-center justify-end relative w-[80%]">

                    <div className="relative flex-shrink-0 h-30 w-30 md:w-40 md:h-40">
                      <Image
                        src={method.pattern}
                        alt=""
                        fill
                        className="object-contain"
                        sizes=""
                      />
                    </div>
                    <div className="relative flex-shrink-0 h-40 w-40 md:h-50 md:w-50 ">
                      <Image
                        src={method.image}
                        alt={method.title}
                        fill
                        className="object-contain"
                        sizes=""
                      />
                    </div>

                  </div>

                </div>

                <div className="flex flex-col space-y-3 text-left  relative -top-10 ">
               
                  <h3 className="text-base font-semibold text-black md:text-lg">{method.title}</h3>
                  <p className="text-xs md:text-sm text-[#4a4a4a] w-[70%] ">{method.description}</p>
                  <ul className="space-y-2 text-[10px] md:text-xs text-black">
                    {method.highlights.map((item) => (
                      <li key={item} className="flex gap-2 items-center">
                        <IoIosCheckmarkCircle className="h-2 w-2 md:h-3 md:w-3 text-black" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                     {/* Button moved to left side */}
                     <div className="button-container mt-2 mb-2 text-left">
                    <button
                      className="bg-[#edc623] hover:bg-yellow-500 cursor-pointer
                        text-black  px-4 py-2 rounded-full flex items-center 
                        justify-center gap-2 transition-colors text-xs md:text-sm  shadow-md hover:shadow-lg"
                      type="button"
                    >
                      <span>{method.cta}</span>
                      <HiArrowUpRight className="text-base rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourLearningStyle;