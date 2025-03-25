'use client';
import React, { useState } from 'react'
import InputField from './InputField'
import Button from './Button';
import axios from 'axios';
import Spinner from './Spinner';

const WaitListForm = () => {
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    location:''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sMessage, setSMessage] = useState<string>("");
 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   setErrorMessage("");
   setSMessage("");
   const requiredFields = ['name', 'email', 'phone', 'location'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData].trim());
    
    if (emptyFields.length > 0) {
      setErrorMessage(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage('Please enter a valid phone number');
      return;
    }
   setIsLoading(true);
   try {
     const formDataToSend = new URLSearchParams();
     Object.entries(formData).forEach(([key, value]) => {
       formDataToSend.append(key, value);
     });
     const response = await fetch(
       "https://script.google.com/macros/s/AKfycbxh7jzC0T0eMeKnly4lTHZIK6YoRm0pWYlXoGhA0GqHRQ1nDPcwyxeYUaSk4mO1XMUSPA/exec",
       {
         method: "POST",
         mode: "no-cors",
         headers: {
           "Content-Type": "application/x-www-form-urlencoded",
         },
         body: formDataToSend.toString(),
       },
     );
    
       setSMessage(
         "You're on the list! We'll keep you updated with exclusive perks and launch details soon. 🚀",
       );
     setFormData({
       name: "",
       email: "",
       phone: "",
       location: "",
     });
     const form = event.target as HTMLFormElement;
     form.reset();
    
   } catch (error) {
     setErrorMessage("Error submitting your details");
     console.log(error);
   } finally {
     setIsLoading(false);
   }
 };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({...formData,[event.target.name]:event.target.value});
      console.log(formData)
  }
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <h2 className="text-center text-2xl font-semibold text-gray-700">
        Your Information
      </h2>
      {isLoading && <Spinner />}
      {errorMessage && (
        <div className="rounded-md border border-red-600 bg-red-200 py-3 text-center text-xs text-red-600 sm:text-base">
          {errorMessage}
        </div>
      )}
      {sMessage && (
        <div className="text- rounded-md bg-[#CEDDD0] px-16 py-3 text-center text-sm">
          <h3 className="pb-2 text-xl font-semibold">
            Thank You for Joining grevego
          </h3>
          {sMessage}
        </div>
      )}
      <InputField
        label="Name"
        placeholder="Type Your Name"
        type="text"
        name="name"
        onchange={handleChange}
      />
      <InputField
        label="Email Address"
        placeholder="Type Your Email Address"
        type="email"
        name="email"
        onchange={handleChange}
      />
      <InputField
        label="Phone Number"
        placeholder="Type Your Phone Number"
        type="text"
        name="phone"
        onchange={handleChange}
      />
      <InputField
        label="Location"
        placeholder="Type Your Location eg. Lagos, Nigeria"
        type="text"
        name="location"
        onchange={handleChange}
      />
      <div className="my-3 flex items-center gap-2">
        <input type="checkbox" className="size-4 accent-primaryColor" />
        <p className="text-sm text-muted-foreground md:text-base">
          Get the latest Grevego and exclusive offers.
        </p>
      </div>
      <div className="flex justify-center md:justify-start">
        <Button
          title="Submit"
          variant="primary"
          style="my-5 w-[60%] "
          btnType="submit"
        />
      </div>
    </form>
  );
}

export default WaitListForm