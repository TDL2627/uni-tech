import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Katlego',
      comment: 'UniTech provided me with an excellent bar fridge for my dorm. It was in great condition and kept my food fresh throughout the semester. Highly recommended!',
    },
    {
      id: 2,
      name: 'Morne',
      comment: 'I rented a bar fridge from UniTech, and it was perfect for my small apartment. The rental process was smooth, and the customer service was fantastic.',
    },
    {
      id: 3,
      name: 'Kyle',
      comment: 'The bar fridge I rented from UniTech was spacious and had plenty of room for all my groceries. I am very satisfied with their service.',
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-black p-6 rounded-lg shadow-md">
              <p className="text-white italic mb-4">"{testimonial.comment}"</p>
              <p className="text-white font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;