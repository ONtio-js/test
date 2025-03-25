'use client';
import React, { useState } from 'react'
import InputField from './InputField';
import Button from './Button';
import Spinner from './Spinner';

const ContactForm = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });
    const [isLoading,setIsloading] = useState<boolean>(false)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setFormData({...formData,[event.target.name]:event.target.value});
        
    }
    const handleSubmit =  async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsloading(true);

        try {
            
        } catch (error) {
            console.log(error)
        }finally{
            setIsloading(false)
        }
    }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-5 border-gray-300 px-10 md:pr-10 lg:items-start lg:border-r lg:pr-20"
    >
      <h3 className="text-2xl font-semibold">Send Us a Message</h3>
      {isLoading && <Spinner />}
      <InputField
        label="Name"
        type="text"
        placeholder="Type your Name"
        name="name"
        onchange={handleChange}
      />
      <InputField
        label="Email Address"
        type="email"
        placeholder="Type your email address"
        name='email'
        onchange={handleChange}
      />
      <InputField
        label="Subject"
        type="text"
        placeholder="Type your message subject"
        name='subject'
        onchange={handleChange}
      />
      <textarea
        name="message"
        id=""
        rows={4}
        className="mt-2 w-full rounded-xl border-2 p-5"
        placeholder="Type your message here ... "
        onChange={handleChange}
      ></textarea>
      <div>
        <Button title="send" variant="primary" style="w-[250px] py-4 mt-8" btnType='submit' />
      </div>
    </form>
  );
}

export default ContactForm