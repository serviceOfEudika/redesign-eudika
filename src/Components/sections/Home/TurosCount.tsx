'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Statistic {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

const statistics: Statistic[] = [
  {
    id: '1',
    value: 28267,
    label: 'Verified tutors',
    suffix: '+',
  },
  {
    id: '2',
    value: 2240,
    label: 'Live Tuition Jobs',
    suffix: '+',
  },
  {
    id: '3',
    value: 1522,
    label: 'Tuitions matched',
    suffix: '+',
  },
  {
    id: '4',
    value: 1522,
    label: 'Institutions',
    suffix: '+',
  },
];

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      // If not using intersection observer, set count immediately
      const timer = setTimeout(() => {
        setCount(end);
        setHasAnimated(true);
      }, 0);
      return () => clearTimeout(timer);
    }

    if (hasAnimated) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            let startTime: number | null = null;
            const startValue = 0;

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [end, duration, startOnView, hasAnimated]);

  return { count, ref };
};

const CountUpNumber: React.FC<{ statistic: Statistic; isGrid2?: boolean }> = ({ statistic, isGrid2 = false }) => {
  const { count, ref } = useCountUp(statistic.value, 2000, true);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // Add p-2 when bg changes (i.e., when bg-[#fbfbf7] is applied on mobile)
      className={`flex flex-col items-center text-center w-full h-full rounded-2xl 
        transition-colors duration-200 
        bg-[#fbfbf7] md:bg-transparent
        p-5 md:p-0
      `}
    >
      <div className="flex items-baseline justify-center gap-1">
        <motion.span
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl font-bold text-black"
        >
          {count.toLocaleString()}
        </motion.span>
        {statistic.suffix && (
          <span className="text-3xl  font-bold text-black">
            {statistic.suffix}
          </span>
        )}
      </div>
      <p className="text-xs md:text-sm text-black mt-2 font-normal">
        {statistic.label}
      </p>
    </motion.div>
  );
};

export default function TurosCount() {
  // "grid-cols-2" will be active on mobile (<md)
  // We use this to set element's bg: #fbfbf7 on grid 2 and transparent on md+
  // Added p-2 to CountUpNumber for mobile bg, md:p-0 for md+ transparent
  return (
    <section className="bg-[#eceada66] py-5">
      <div className="max-w-6xl mx-auto px-4 md:px-13">
        {/* Responsive grid: 2 columns for < md, 4 for md and up */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4
         items-center justify-items-center w-full">
          {statistics.map((statistic) => (
            <CountUpNumber key={statistic.id} statistic={statistic} />
          ))}
        </div>
      </div>
    </section>
  );
}
