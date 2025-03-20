import React from 'react'
import InputField from './InputField'
import Button from './Button';

const WaitListForm = () => {
  return (
    <form className="w-full">
      <h2 className="text-2xl font-semibold text-gray-700">Your Information</h2>
      <InputField
        label="Full Name"
        placeholder="Type Your Name"
        type="text"
        onchange={""}
      />
      <InputField
        label="Email Address"
        placeholder="Type Your Email Address"
        type="email"
        onchange={""}
      />
      <InputField
        label="Phone Number"
        placeholder="Type Your Phone Number"
        type="text"
        onchange={""}
      />
      <InputField
        label="Location"
        placeholder="Type Your Location eg. Lagos, Nigeria"
        type="text"
        onchange={""}
      />
      <div className='flex items-center gap-2 my-3'>
        <input type='checkbox' className='size-4 accent-primaryColor' />
        <p className='text-muted-foreground'>Get the latest Grevego and exclusive offers.</p>
      </div>
      <Button title='Submit' variant='primary' style='my-5'/>
    </form>
  );
}

export default WaitListForm