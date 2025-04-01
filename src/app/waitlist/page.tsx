import Image from 'next/image';
import React from 'react'
import WaitListForm from '../_components/WaitListForm';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Waitlist | Grevego",
}
const page = () => {
  return (
    <div className="mt-24 md:pt-10 px-5 md:px-20 pb-10">
      <h1 className="text-center text-4xl font-bold capitalize text-gray-700">
        get early access
      </h1>
      <p className='text-center py-10 text-gray-70'>
        Join the waitlist for early access, exclusive discounts, and a smarter
        way to shop sustainably!
      </p>
      <div className="mx-auto mt-5 hidden w-[500px] rounded-2xl bg-secondaryColor p-5">
        <h3 className="text-center text-lg font-medium">
          Thank you for joining Grevego
        </h3>
        <p className="py-2 text-center text-sm text-gray-600">
          You are on the list! We will keep you updated with exclusive perks and
          launch details soon. 
        </p>
      </div>
      <div className="flex flex-col items-center justify-around gap-10 md:px-20 py-10 lg:flex-row">
        <WaitListForm />
        <Image
          src="/home/waitlist.jpeg"
          alt="waitlist"
          width={500}
          height={500}
          className=" rounded-[20px]"
        />
      </div>
    </div>
  );
}

export default page