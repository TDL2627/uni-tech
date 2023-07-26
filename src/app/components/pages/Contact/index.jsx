import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simulate form submission (you can implement the actual form submission logic here)
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-500 text-white rounded-md font-bold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;