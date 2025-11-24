'use client';
import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarLogo from './atoms/NavbarLogo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/find-tutors', label: 'Find Tutors' },
    { href: '/become-a-tutor', label: 'Become A Tutor' },
    { href: '/institutions', label: 'Institutions' },
    { href: '/tuition-board', label: 'Tuition Board' },
  ];

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'FR', name: 'French', flag: '🇫🇷' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b
     border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-13">

        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <NavbarLogo
              href="/"
              logoSrc="/assets/Nav-logo.png"
              logoAlt="Eudica Logo"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center space-x-2 lg:flex-1
           md:justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 px-2
                 py-2 text-xs font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons and User Info - Desktop */}
          <div className="hidden lg:flex lg:items-center">
            {/* Language Selector */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-xs
                 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className="font-medium">{selectedLanguage.code}</span>
                <span className="text-lg">{selectedLanguage.flag}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLanguageMenuOpen ? 'rotate-180' : ''
                  }`}
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
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLanguageMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm
                       text-gray-700 hover:bg-gray-100 flex 
                       items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Icon */}
            <button className="relative p-2 text-gray-600
             hover:text-gray-900 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Messages Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>

            {/* User Profile */}
            <div className="flex items-start">

            <div className="flex items-center space-x-3 pl-4 ">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden border-2 border-gray-200">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  Rayhan
                </span>
                <span className="text-xs text-gray-500">Super_admin</span>
              </div>
            </div>

            {/* WhatsApp/Chat Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <FaWhatsapp />
            </button>

            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Icons */}
            <button className="relative p-2 text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="px-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700"
                >
                  <div className="flex items-center space-x-2">
                    <span>{selectedLanguage.code}</span>
                    <span className="text-lg">{selectedLanguage.flag}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isLanguageMenuOpen ? 'rotate-180' : ''
                    }`}
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
                </button>
                {isLanguageMenuOpen && (
                  <div className="mt-2 space-y-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsLanguageMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md flex items-center space-x-2"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile User Profile */}
                <div className="flex items-start">

            <div className="flex items-center space-x-3 pl-4 ">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden border-2 border-gray-200">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  Rayhan
                </span>
                <span className="text-xs text-gray-500">Super_admin</span>
              </div>
            </div>

            {/* WhatsApp/Chat Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <FaWhatsapp />
            </button>

            </div>

              {/* Mobile Action Icons */}
              <div className="px-3 py-2 flex items-center space-x-4 border-t border-gray-200 mt-2">
                <button className="p-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
                <button className="p-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-1.866-2.03-2.272-.272-.406-.47-.699-.673-.699-.193 0-.349.096-.349.297 0 .201.124.496.272.699.149.201.297.496.297.699 0 .201-.149.297-.297.496-.149.201-.297.297-.446.496-.149.201-.124.297.074.496.201.201.673.699 1.444 1.069.99.496 1.738.645 1.99.645.251 0 .347-.096.347-.297 0-.201-.149-.297-.297-.496zm-5.421-7.403h-.004a6.075 6.075 0 00-4.931 2.475 6.075 6.075 0 00.001 7.644 6.075 6.075 0 004.93 2.474h.004a6.075 6.075 0 004.93-2.474 6.075 6.075 0 00.001-7.644 6.075 6.075 0 00-4.93-2.475zm4.93 1.5a4.5 4.5 0 013.676 1.823 4.5 4.5 0 01.001 5.354 4.5 4.5 0 01-3.676 1.823h-.003a4.5 4.5 0 01-3.676-1.823 4.5 4.5 0 01-.001-5.354 4.5 4.5 0 013.676-1.823h.003z" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        )}


      </div>
    </nav>
  );
};

export default Navbar;

