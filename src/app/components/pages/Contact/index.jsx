import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleygjgw");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div id='contact' className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-2 border rounded-md"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border rounded-md"
              rows="4"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-600"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;