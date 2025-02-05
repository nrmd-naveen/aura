import React from "react";
import ContactForm from "../components/FormComponent";

const ContactSection = ({ contactRef }) => {
    return (
        <section className="h-full "  id="contact" ref={contactRef} >
            <Heading />
            <ContactForm />
      </section>
  )
};


const Heading = () => {
    return (
        <div className=" font-sora flex flex-col md:gap-2 items-center text-center mt-20 px-4 text-nowrap text-[28px] md:text-5xl font-medium " >
        <div>
            <span className="text-gray-txt ">
                Contact
            </span>
        <span className="text-white pl-2">
                Us
            </span>
        </div>
      {/* <p className=" text-p-txt text-xs md:text-lg mt-4 lg:px-40 xl:px-72  text-wrap">
      
      </p> */}
    </div>

    )
}

export default ContactSection;
