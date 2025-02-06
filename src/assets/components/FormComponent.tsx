import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";
import { useState } from "react"; // Import useState
import Input from "../ui/Input";
import Button from "../ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
  service: z.string().nonempty("Service selection is required"),
  message: z.string(),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const onSubmit = (data) => {
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true); // Disable submission

    console.log("Form Submitted:", data);
    // return;
    // Send the form data to admin via EmailJS
    emailjs
      .send(
        "service_c0y4r0f", // Service ID from EmailJS dashboard
        "template_so6z8mp", // Template ID for admin email
        {
          to_name: "Admin", // Admin's name (or dynamic)
          from_name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        },
        "wmFyjJQo0RbXyAU5j" // User ID from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Admin email sent:", result.text);

          // Send auto-reply email to the user
          emailjs
            .send(
              "service_c0y4r0f", // Service ID from EmailJS dashboard
              "template_tpp8gcq", // Template ID for auto-reply
              {
                from_name: data.name, // The user's name
                email: data.email, // The user's email
                phone: data.phone, // The user's phone number
                service: data.service, // The selected service
              },
              "wmFyjJQo0RbXyAU5j" // User ID from EmailJS dashboard
            )
            .then(
              (result) => {
                alert(
                  "Form submitted successfully! An auto-reply has been sent."
                );
                reset();
                setIsSubmitting(false); // Re-enable submission
              },
              (error) => {
                console.log(error.text);
                alert("Error sending form and auto-reply.");
                setIsSubmitting(false); // Re-enable submission
              }
            );
        },
        (error) => {
          console.log(error.text);
          alert("Error sending form");
          setIsSubmitting(false); // Re-enable submission
        }
      );
  };

  return (
    <div className="md:mt-8 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" text-white p-6 rounded-lg w-full max-w-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1">Name</label>
            <Input
              fullWidth={true}
              placeHolder="name"
              type="text"
              variant="outline"
              register={register}
              name="name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <Input
              fullWidth={true}
              placeHolder="Email"
              type="email"
              variant="outline"
              register={register}
              name="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Phone Number</label>
            <Input
              fullWidth={true}
              placeHolder="phone"
              type="text"
              variant="outline"
              register={register}
              name="phone"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="relative">
            <label className="block mb-1">Select Service</label>
            <select
              {...register("service")}
              className="w-full outline-none flex justify-center items-center pl-6 pr-10 py-4 md:py-3 rounded-full font-sora text-white text-sm md:text-base bg-transparent inset-ring-2 inset-ring-white/20   appearance-none"
            >
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value=""
              >
                Select your Service
              </option>
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value="Logo design"
              >
                Logo design
              </option>
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value="Website Development"
              >
                Website Development
              </option>
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value="Digital / Content/ Influencer Marketing"
              >
                Digital / Content/ Influencer Marketing
              </option>
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value="Video editing"
              >
                Video editing
              </option>
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value="Advertisement shoot"
              >
                Advertisement shoot
              </option>
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value="Social media management"
              >
                Social media management
              </option>
              <option
                className="bg-gray hover:bg-gray-txt text-white/50 hover:text-white"
                value="Meta / Google ads"
              >
                Meta / Google ads
              </option>
            </select>
            <span className="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-txt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-1">Message</label>
          <textarea
            {...register("message")}
            className="w-full outline-none flex justify-center items-center pl-6 pr-10 py-5 rounded-3xl font-sora textwhite text-sm md:text-base bg-transparent inset-ring-2 inset-ring-white/20 placeholder-gray-txt"
            placeholder="Enter your Message"
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <div className="flex items-center justify-center my-6">
          
        <Button
          text={isSubmitting ? "Sending..." : "Send your Inquiry →"}
          variant="primary"
          disabled={isSubmitting}
          type="submit"
          />
        </div>
      </form>
    </div>
  );
}
