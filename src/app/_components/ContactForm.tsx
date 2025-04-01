"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrorMessage("");
    setSuccessMessage("");
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsloading(true);

    try {
      fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          setSuccessMessage("Message sent successfully");
          const form = event.target as HTMLFormElement;
          form.reset();
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
        } else {
          setErrorMessage("Error sending message");
        }
      }).catch((error) => {
        console.error("Error submitting form:", error);
        setErrorMessage(
          error instanceof Error ? error.message : "Error sending message",
        );
      } );
    } catch (error) {
        console.error("Error submitting form:", error);
        setErrorMessage(
          error instanceof Error ? error.message : "Error sending message",
        );
    } finally {
      setIsloading(false);
    }
  };
  return (
    <form
      action={""}
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-5 border-gray-300 px-10 md:pr-10 lg:items-start lg:border-r lg:pr-20"
    >
      {errorMessage && (
        <div className="w-full rounded-md border border-red-600 bg-red-200 py-3 text-center text-xs text-red-600 sm:text-base">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="w-full rounded-md bg-[#CEDDD0] px-16 py-3 text-center text-sm">
          <h3 className="pb-2 text-xl font-semibold">
            Thank You for Joining grevego
          </h3>
          {successMessage}
        </div>
      )}
      <h3 className="text-2xl font-semibold">Send Us a Message</h3>
      <div className="flex justify-center w-full">{isLoading && <Spinner />}</div>
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
        name="email"
        onchange={handleChange}
      />
      <InputField
        label="Subject"
        type="text"
        placeholder="Type your message subject"
        name="subject"
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
      <div className="flex w-full justify-center">
        <Button
          title="send"
          variant="primary"
          style="w-[250px] py-4 mt-8"
          btnType="submit"
        />
      </div>
    </form>
  );
};

export default ContactForm;