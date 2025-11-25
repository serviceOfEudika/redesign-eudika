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
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <ShieldIconWithText
            text="Tutoring method"
            iconSize="sm"
            textSize="sm"
            className="justify-center text-[#000000]"
            textClassName="tracking-[5px] text-[#000000]"
          />
          <h2 className="mt-4 text-3xl font-bold text-black md:text-4xl lg:text-[42px]">
            Choose Your Learning Style
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs text-[#000000] md:text-sm">
            Eudica provides online, in-person, and group tutoring <span className='hidden md:inline'><br /></span> methods for personalized learning.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 ">
          {methods.map((method) => (
            <article
              key={method.id}
              className="relative overflow-hidden rounded-[32px] 
               p-6 shadow-[0_30px_80px_rgba(8,15,52,0.08)] "
            >
              <div className="pointer-events-none absolute inset-0 opacity-10">
                <Image
                  src={method.pattern}
                  alt=""
                  fill
                  className="object-contain object-center"
                />
              </div>

              <div className="relative flex flex-col gap-6 ">
                <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ec91]">
                    <HiArrowUpRight className="text-xl text-black" />
                  </div>
                  <div className="relative w-full flex-1">
                    <div className="relative h-40 w-full overflow-hidden rounded-[34px] md:h-44">
                      <Image
                        src={method.image}
                        alt={method.title}
                        fill
                        className="object-cover"
                        style={{
                          clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 78% 100%, 0% 100%)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <h3 className="text-lg font-semibold text-black md:text-xl">{method.title}</h3>
                  <p className="text-sm text-[#4a4a4a] md:text-base">{method.description}</p>

                  <ul className="space-y-2 text-xs text-black md:text-sm">
                    {method.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <IoIosCheckmarkCircle className="h-4 w-4 text-[#f0c419]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-[#edc623] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#ffda3d]"
                  >
                    {method.cta}
                    <HiArrowUpRight className="text-base" />
                  </button>
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