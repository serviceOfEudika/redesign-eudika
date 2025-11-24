'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  const companyLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/faq', label: 'Faq' },
    { href: '/safety', label: 'Safety' },
    { href: '/security', label: 'Security' },
  ];

  const learnWithUsLinks = [
    { href: '/find-a-tutor', label: 'Find A Tutor' },
    { href: '/request-a-tutor', label: 'Request A Tutor' },
    { href: '/online-tutoring', label: 'Online Tutoring' },
    { href: '/how-it-works', label: 'How It Work' },
    { href: '/pro-subscription', label: 'Pro Subscription' },
  ];

  const workWithUsLinks = [
    { href: '/blogs', label: 'Blogs' },
    { href: '/careers', label: 'Careers' },
    { href: '/apply-to-tutor', label: 'Apply To Tutor' },
    { href: '/tutor-job-board', label: 'Tutor Job Board' },
    { href: '/merchant-program', label: 'Merchant Program' },
  ];

  const popularLocations = [
    { href: '/locations', label: 'Locations' },
    { href: '/locations', label: 'Locations' },
    { href: '/locations', label: 'Locations' },
    { href: '/locations', label: 'Locations' },
  ];

  const subjects = [
    { href: '/subjects', label: 'Subjects' },
    { href: '/subjects', label: 'Subjects' },
    { href: '/subjects', label: 'Subjects' },
    { href: '/subjects', label: 'Subjects' },
  ];

  const academics = [
    { href: '/academics', label: 'Academics' },
    { href: '/academics', label: 'Academics' },
    { href: '/academics', label: 'Academics' },
    { href: '/academics', label: 'Academics' },
  ];

  const topInstitutions = [
    { href: '/institutions', label: 'Institutions' },
    { href: '/institutions', label: 'Institutions' },
    { href: '/institutions', label: 'Institutions' },
    { href: '/institutions', label: 'Institutions' },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: '#',
      label: 'LinkedIn',
      className: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: FaInstagram,
      href: '#',
      label: 'Instagram',
      className: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90',
    },
    {
      icon: FaFacebook,
      href: '#',
      label: 'Facebook',
      className: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: FaTelegram,
      href: '#',
      label: 'Telegram',
      className: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: FaWhatsapp,
      href: '#',
      label: 'WhatsApp',
      className: 'bg-green-500 hover:bg-green-600',
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-13 py-10 md:py-20">
        {/* Top Section - Five Columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-6 mb-12 lg:mb-16">
          {/* Brand Information */}
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold mb-4">eudica</h2>
            <p className="md:text-base text-sm text-[#ffffff80] leading-relaxed">
              Eudika empowers your team to learn more efficiently, rapidly, and
              with minimal manual intervention.
            </p>
          </div>

          {/* Company Links */}
          <div className=''>
            <h3 className="text-base font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#ffffff80] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn With Us Links */}
          <div className=''>
            <h3 className="text-base font-bold mb-4">Learn With Us</h3>
            <ul className="space-y-2">
              {learnWithUsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#ffffff80] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work With Us Links */}
          <div className=''>
            <h3 className="text-base font-bold mb-4">Work With Us</h3>
            <ul className="space-y-2">
              {workWithUsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#ffffff80] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Our App */}
          <div className='col-span-2 md:col-span-1'>
            <h3 className="text-base font-bold mb-4">Download Our App</h3>
            <div className="flex flex-col space-y-3 ">
              {/* App Store Badge */}
              <a
                href="#"
                className="inline-flex items-center bg-black border border-gray-100 rounded-md p-2 hover:bg-gray-900 transition-colors w-full sm:w-auto"
              >
                <svg
                  className="w-7 h-7 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs leading-tight">
                    Download on the
                  </div>
                  <div className="text-xs md:text-sm font-semibold leading-tight">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Badge */}
              <a
                href="#"
                className="inline-flex items-center bg-black border border-gray-100 rounded-md p-2 hover:bg-gray-900 transition-colors w-full sm:w-auto"
              >
                <svg
                  className="w-7 h-7 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs leading-tight">
                    GET IT ON
                  </div>
                  <div className="text-xs md:text-sm font-semibold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section - Four Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 lg:mb-16">
          {/* Popular Locations */}
          <div>
            <h3 className="md:text-base text-sm font-bold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              {popularLocations.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="md:text-sm text-xs text-[#ffffff80] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="md:text-base text-sm font-bold mb-4">Subjects</h3>
            <ul className="space-y-2">
              {subjects.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="md:text-sm text-xs text-[#ffffff80] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="md:text-base text-sm font-bold mb-4">Academics</h3>
            <ul className="space-y-2">
              {academics.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="md:text-sm text-xs text-[#ffffff80] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Institutions */}
          <div>
            <h3 className="md:text-base text-sm font-bold mb-4">Top Institutions</h3>
            <ul className="space-y-2">
              {topInstitutions.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="md:text-sm text-xs text-[#ffffff80] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="md:text-sm text-xs">
              Copyright 2025 The eudica All Rights Reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${social.className} flex items-center justify-center text-white hover:scale-110 transition-transform`}
                  >
                    <Icon className="md:w-5 md:h-5 w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
