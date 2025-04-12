
import React from 'react'
import Image from 'next/image';
import ContactForm from '../_components/ContactForm';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Contact | Grevego",
};
const page = () => {
  return (
    <>
      <section className="mt-20 lg:-mt-10 px-5 md:pt-10 text-gray-700  md:px-20">
        <div className="flex flex-col items-center py-10">
          <h2 className="max-w-[800px] text-center text-2xl font-bold md:text-5xl">
            We’re Here to Help – Let’s Build a Greener Future Together
          </h2>
          <p className="mt-5 text-center md:pt-8">
            Whether you’re a vendor, partner, or customer, we’d love to hear
            from you
          </p>
        </div>
        <div className="-mx-5 my-20 mb-20 grid gap-y-10 md:mx-0 lg:grid-cols-2">
          <div>
            <ContactForm />
           
          </div>
          <div className="flex flex-col gap-10 p-5 md:items-center md:p-10 lg:items-start lg:gap-8 lg:p-20">
            <div>
              <h3 className="pb-3 text-2xl font-semibold md:text-center lg:text-left">
                Get in Touch
              </h3>
              <p className="md:px-32 md:text-center lg:px-0 lg:text-left">
                Have a question? Reach out through one of the options below and
                a Grevego agent will get in touch with you soon.
              </p>
            </div>

            <div className="flex flex-col md:items-center lg:items-start">
              <h3 className="pb-3 text-2xl font-medium">Chat with us</h3>
              <p>Our friendly team is here to help</p>
              <p className="py-2 font-semibold text-primaryColor">
                <a href="mailto:grevegohq@gmail. com">grevegohq@gmail.com</a>
              </p>
            </div>

            <div className="flex flex-col md:items-center lg:items-start">
              <h3 className="pb-3 text-2xl font-medium">Call us</h3>
              <p>We are here to help with any question you may have.</p>
              <p className="pt-2 font-semibold text-primaryColor">
                <a href="tel:+2349053306268">+2349053306268</a> 
              </p>
            </div>

            <div className=" flex flex-col md:items-center lg:items-start">
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