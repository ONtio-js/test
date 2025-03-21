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
 
      />
      <InputField
        label="Email Address"
        placeholder="Type Your Email Address"
        type="email"
      
      />
      <InputField
        label="Phone Number"
        placeholder="Type Your Phone Number"
        type="text"
    
      />
      <InputField
        label="Location"
        placeholder="Type Your Location eg. Lagos, Nigeria"
        type="text"
        
      />
      <div className="my-3 flex items-center gap-2">
        <input type="checkbox" className="size-4 accent-primaryColor" />
        <p className="text-muted-foreground">
          Get the latest Grevego and exclusive offers.
        </p>
      </div>
      <Button title="Submit" variant="primary" style="my-5" />
    </form>
  );
}

export default WaitListForm