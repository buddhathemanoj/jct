import Image from 'next/image';
import React from 'react';
import Header from './header';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100">
  <Header/>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              Introduce Your Product<br />Quickly & Effectively
            </h1>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.
            </p>
            <p className="mb-6 text-gray-600">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <div className="space-x-4">
              <button className="bg-navy-blue text-white px-6 py-2 rounded">
                Purchase UI Kit
              </button>
              <button className="border border-navy-blue text-navy-blue px-6 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-light-blue rounded-full -z-10"></div>
            <Image src="/designer.svg" alt="Hero Image" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;