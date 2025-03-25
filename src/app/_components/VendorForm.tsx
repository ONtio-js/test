'use client';
import React, { useState } from 'react'
import InputField from './InputField';
import Button from './Button';
import axios from 'axios'
import Spinner from './Spinner';
const VendorForm = () => {
  const [formData,setFormData] = useState({
    businessName:'',
    name:'',
    email:'',
    phone:'',
    businessType:'',
    location:''
  });
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [errorMessage,setErrorMessage] = useState<string>('');
  const [sMessage,setSMessage] = useState<string>('');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setFormData({...formData,[e.target.name]:e.target.value})
      setErrorMessage('')
      console.log('hello')
  }
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('')
        setIsLoading(true);
        try {
          // const response = await axios.post(
          //   "https://cors-anywhere.herokuapp.com/" +
          //     "https://script.google.com/macros/s/AKfycbyHFg7rPZ6sERss2Uvcpm_9zfyxfllTsJdg6HfX8y952th-aW595qBRdZYNYzoV2KF2eA/exec",
          //   formData,
          // );
          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbyHFg7rPZ6sERss2Uvcpm_9zfyxfllTsJdg6HfX8y952th-aW595qBRdZYNYzoV2KF2eA/exec",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
              },
              body: JSON.stringify(formData),
            },
          );
          if(response.ok){
            setSMessage('submission successful')
          }else{
            setErrorMessage('Failed to submit')
          }
        } catch (error) {
          setErrorMessage('Error submitting your details')
          console.log(error)
        } finally{
          setIsLoading(false)
        }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-2 pb-20 md:w-[600px]"
    >
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
      {isLoading && <Spinner />}
      <InputField
        label="Business Name"
        placeholder="Type Your Business name"
        type="text"
        name="businessName"
        onchange={handleChange}
      />
      <InputField
        label=" Name"
        placeholder="Type Your  name"
        type="text"
        name="name"
        onchange={handleChange}
      />
      <InputField
        label="Email Address"
        placeholder="Type Your email address"
        type="email"
        name="email"
        onchange={handleChange}
      />
      <InputField
        label="Phone Number"
        placeholder="Type Your Phone number"
        type="text"
        name="phone"
        onchange={handleChange}
      />
      <InputField
        label="Business Type"
        placeholder="Type your business category e.g (Fruits,  vegetables, organic, Beverages)"
        type="text"
        name="businessType"
        onchange={handleChange}
      />
      <InputField
        label="Business Location"
        placeholder="Type Your Location eg. Lagos, Nigeria"
        type="text"
        name="location"
        onchange={handleChange}
      />
      <div className="my-3 flex items-center gap-2">
        <input type="checkbox" className="size-4 accent-primaryColor" />
        <p className="text-xs text-muted-foreground md:text-base">
          Get the latest Grevego and exclusive offers.
        </p>
      </div>
      <Button
        variant="primary"
        title="submit"
        style="w-[60%] mx-auto mt-2"
        btnType="submit"
      />
    </form>
  );
}

export default VendorForm