"use client";
import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import axios from "axios";
import Spinner from "./Spinner";

const AgentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sMessage, setSMessage] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    try {
           const response = await fetch(
             "https://script.google.com/macros/s/AKfycbyHFg7rPZ6sERss2Uvcpm_9zfyxfllTsJdg6HfX8y952th-aW595qBRdZYNYzoV2KF2eA/exec",
             {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
                 "Access-Control-Allow-Origin": "*",
               },
               body: JSON.stringify(formData),
             },
           );
      if (response.ok) {
        setSMessage(
          "You're on the list! We'll keep you updated with exclusive perks and launch details soon. 🚀",
        );
      } else {
        setErrorMessage("Failed to submit");
      }
    } catch (error) {
      setErrorMessage("Error submitting your details");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  return (
    <form
      action=""
      className="flex flex-col gap-2 md:w-[600px]"
      onSubmit={handleSubmit}
      id="form"
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
        label=" Name"
        placeholder="Type Your Business name"
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
        label="Address"
        placeholder="Type Your Address eg. Lagos, Nigeria"
        type="text"
        name="address"
        onchange={handleChange}
      />
      <div className="my-3 flex items-center gap-2">
        <input type="checkbox" className="size-4 accent-primaryColor" />
        <p className="text-xs text-muted-foreground md:text-base">
          Get the latest Grevego and exclusive offers.
        </p>
      </div>
      <Button variant="primary" title="submit" style="w-[30%] mx-auto  mt-2" />
    </form>
  );
};

export default AgentForm;
