"use client"
import React from 'react'
import InputField from '../_components/InputField';
import Button from '../_components/Button';
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <section className="mt-10 md:-mt-10 px-5 md:px-20 text-gray-700">
        <div className="flex flex-col items-center py-10">
          <h2 className="max-w-[800px] text-center text-2xl md:text-5xl font-bold">
            We’re Here to Help – Let’s Build a Greener Future Together
          </h2>
          <p className="text-center mt-5 md:pt-8">
            Whether you’re a vendor, partner, or customer, we’d love to hear
            from you
          </p>
        </div>
        <div className="mt-20 -mx-5 md:mx-0 grid gap-y-10 lg:grid-cols-2">
          <div>
            <form
              action=""
              className="flex px-10 flex-col items-center gap-y-5 border-gray-300 md:pr-10 lg:items-start lg:border-r lg:pr-20"
            >
              <h3 className="text-2xl font-semibold">Submit a Request</h3>
              <InputField
                label="Name"
                type="text"
                placeholder="Type your Name"
                onchange={() => ""}
              />
              <InputField
                label="Email Address"
                type="email"
                placeholder="Type your email address"
                onchange={() => ""}
              />
              <InputField
                label="Subject"
                type="text"
                placeholder="Type your message subject"
                onchange={() => ""}
              />
              <textarea
                name=""
                id=""
                rows={4}
                className="mt-2 w-full rounded-xl border-2 p-5"
                placeholder="Type your message here ... "
              ></textarea>
              <div>
                <Button
                  title="submit"
                  variant="primary"
                  style="w-[250px] py-4 mt-8"
                />
              </div>
            </form>
            <div className="my-20 hidden lg:block">
              <h2 className="py-5 text-2xl font-semibold">
                Our Office Locations
              </h2>
              <div className="h-[100px] rounded-xl bg-primaryColor/10 px-3 pt-5">
                <p className="flex items-center gap-2">
                  <IoLocationSharp size={30} />1 Muba Abiru Close, Ebute Ikorodu
                  Lagos
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:items-center gap-10 p-5 md:p-10 lg:items-start lg:gap-8 lg:p-20">
            <div>
              <h3 className="pb-3 md:text-center text-2xl font-semibold lg:text-left">
                Get in Touch
              </h3>
              <p className="md:px-32 md:text-center lg:px-0 lg:text-left">
                Have a question? Reach out through one of the options below and
                a Grevego agent will get in touch with you soon.
              </p>
            </div>

            <div className="flex flex-col  md:items-center lg:items-start">
              <h3 className="pb-3 text-2xl font-medium">Chat with us</h3>
              <p>Our friendly team is here to help</p>
              <p className="py-2 font-semibold text-primaryColor">
                <a href="mailto:info@grevego. com">info@grevego.com</a>
              </p>
            </div>

            <div className="flex flex-col md:items-center lg:items-start">
              <h3 className="pb-3 text-2xl font-medium">Call us</h3>
              <p>We are here to help with any question you may have.</p>
              <p className="pt-2 font-semibold text-primaryColor">
                <a href="tel:+2346778789347">+2346778789347</a> {",  "}
                <a href="tel:+2346778789347">+2346778789347</a>
              </p>
            </div>

            <div className="mb-20 md:mb-0 flex flex-col md:items-center lg:items-start">
              <h3 className="pb-3 text-2xl font-medium">Socials</h3>
              <p>Find us across social platforms and feel free to reach out!</p>
              <div className="flex items-center gap-5 pt-2">
                <a
                  className="transition-all delay-100 hover:translate-x-1 hover:text-primaryColor"
                  href="#"
                >
                  <Image
                    src={"/home/icons/facebook.svg"}
                    width={24}
                    height={100}
                    alt="x"
                  />{" "}
                </a>
                <a
                  className="transition-all delay-100 hover:translate-x-1 hover:text-primaryColor"
                  href="#"
                >
                  <Image
                    src={"/home/icons/instagram.svg"}
                    width={24}
                    height={100}
                    alt="x"
                  />
                </a>
                <a
                  className="transition-all delay-100 hover:translate-x-1 hover:text-primaryColor"
                  href="#"
                >
                  <Image
                    src={"/home/icons/whatsapp.svg"}
                    width={24}
                    height={100}
                    alt="x"
                  />
                </a>
                <a
                  className="transition-all delay-100 hover:translate-x-1 hover:text-primaryColor"
                  href="#"
                >
                  <Image
                    src={"/home/icons/x.svg"}
                    width={24}
                    height={100}
                    alt="x"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page