import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";
import { useState } from "react"; // Import useState
import Input from "../ui/Input";

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
      return;
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
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black text-white p-6 rounded-lg w-full max-w-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1">Name</label>
            <Input
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
          <div>
            <label className="block mb-1">Select Service</label>
            <select
              {...register("service")}
              className="w-full p-3 rounded-lg bg-gray-900 text-white outline-none"
            >
              <option value="">Select your Service</option>
              <option value="Logo design">Logo design</option>
              <option value="Website Development">Website Development</option>
              <option value="Digital / Content/ Influencer Marketing">
                Digital / Content/ Influencer Marketing
              </option>
              <option value="Video editing">Video editing</option>
              <option value="Advertisement shoot">Advertisement shoot</option>
              <option value="Social media management">
                Social media management
              </option>
              <option value="Meta / Google ads">Meta / Google ads</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-1">Message</label>
          <textarea
            {...register("message")}
            className="w-full p-3 rounded-lg bg-gray-900 text-white outline-none"
            placeholder="Enter your Message"
            rows="4"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
          
        <button
          type="submit"
          className="mt-6 w-full p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-300 flex justify-center items-center"
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? "Sending..." : "Send your Inquiry →"}
        </button>
      </form>
    </div>
  );
}