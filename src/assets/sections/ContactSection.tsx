import ContactForm from "../components/FormComponent";
import contactImg from './../svg/contact.png'

const ContactSection = ({ contactRef }:{ contactRef: React.RefObject<HTMLInputElement> }) => {
    return (
        <section className="h-full w-full" id="contact" ref={contactRef} >
            
            <Heading />
            <ContactForm />
      </section>
  )
};


const Heading = () => {
    return (
        <div className="flex justify-center items-center">

        <div className=" font-sora flex md:gap-2 items-center text-center mt-20 px-4 text-nowrap text-[28px] md:text-5xl font-medium " >
        <div>
            <span className="text-gray-txt ">
                Contact
            </span>
        <span className="text-white pl-2">
                Us
            </span>
        </div>
            <div className="">
                <img src={ contactImg} className="h-12 md:h-17   -rotate-[8deg] mb-3 md:mb-1 " />
            </div>
      {/* <p className=" text-p-txt text-xs md:text-lg mt-4 lg:px-40 xl:px-72  text-wrap">
      
      </p> */}
      </div>
    </div>

    )
}

export default ContactSection;
