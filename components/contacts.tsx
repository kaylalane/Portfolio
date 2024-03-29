/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("Oz4Q-rOGmPUD7nUq-");

export default function Contact() {
  const [submit, setSumbit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setSumbit(true);
    // console.log(data);
    sendForm("default_service", "template_ncz93v9", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <article id="contact" className=" min-h-screen relative">
      <h2 className="mx-auto text-3xl pb-6 text-center p-5 ">Contact</h2>

      {submit ? (
        "Form Submitted!"
      ) : (
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="text-black"
        >
          <div className="  md:flex gap-4">
            {/* include validation with required or other standard HTML validation rules */}
            <input
              aria-label="Name"
              style={errors.nameRequired && { border: "2px solid red" }}
              placeholder="Name"
              className="mb-4"
              {...register("nameRequired", { required: true })}
            />

            {/* errors will return when field validation fails  */}
            <input
              aria-label="Email"
              style={errors.mail && { border: "2px solid red" }}
              placeholder="Email"
              className="mb-4"
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
          </div>

          <textarea
            aria-label="Type your message here."
            style={errors.messageRequired && { border: "2px solid red" }}
            placeholder="Send me a message!"
            className="message"
            {...register("messageRequired", { required: true })}
            aria-invalid={errors.mail ? "true" : "false"}
          />

          <input
            type="submit"
            role="button"
            className="button text-black font-semibold"
            id="submit-button"
          />
        </form>
      )}
    </article>
  );
}
