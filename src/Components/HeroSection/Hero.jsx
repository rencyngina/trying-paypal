import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link component

const Hero = () => {
  return (
    <div className='bg-white h-[64vh] lg:h-[68vh] lg:mt-16 mt-10 flex flex-col justify-center items-center'>
      <div className='text-pretty text-center mt-12 mb-20 flex flex-col items-center'>
        <Image 
          src='/image/password.png'
          alt='password'
          width={50}
          height={50}
          className="lg:mb-12 mb-6 object-cover object-center"
        />
        <h1 className='lg:text-5xl text-3xl sm:max-xl text-[#9D3434]'>MAKE YOUR PAYMENTS</h1>
        <h2 className='lg:text-4xl text-2xl mt-6'>Choose how to pay</h2>
        <h3 className='lg:text-xl text-base mt-4'>
          Your payment is encrypted and you can change how you pay anytime. <br />
          Secure for peace of mind.
        </h3>
        <h4 className='lg:text-xl text-sm mt-4 text-[#617ABC]'>Cancel easily online.</h4>
        <Link href="https://store.pesapal.com/tilementorshipprogram" passHref>
        <button className="bg-[#9D3434] z-5 text-white font-bold py-4 px-6 lg:mt-14 mt-14 flex items-center">
        Credit or Debit card.
        <div className="flex ml-2">
          <Image src='/image/google-pay.png' alt='icon1' width={24} height={24} />
          <Image src='/image/apple-pay.png' alt='icon2' width={24} height={24} className="ml-2" />
          <Image src='/image/paypal.png' alt='icon3' width={24} height={24} className="ml-2" />
        </div>
      </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
