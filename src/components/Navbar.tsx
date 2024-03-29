import { useState } from 'react';
import { Poppins, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

export const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: 'About', path: '' }
  ];

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="" className="flex items-center">
        
        <p className={`${poppins.className} ml-2 text-white text-2xl font-black tracking-wide`}>
          CARDERS ZONE TG
        </p>
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-400 hover:text-gray-300"
          title="hamburger"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
  return (
      <header className="bg-gray-900">
        <div className={`md:hidden ${state ? 'mx-2 pb-5' : 'hidden'}`}>
          <Brand />
        </div>
        <nav
          className={`md:text-sm ${
            state
              ? 'absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent'
              : ''
          }`}
        >
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <Brand />
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                state ? 'block' : 'hidden'
              } `}
            >
              <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item) => {
                  return (
                    <li
                      key={item.title}
                      className={`${inter.className} text-gray-100 hover:text-gray-400 font-black`}
                    >
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
};
