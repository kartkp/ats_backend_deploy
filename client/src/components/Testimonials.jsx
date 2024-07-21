import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ken Blanchard',
    title: 'Author and Business Professional',
    quote: 'The only job security you have today is your commitment to continuous personal improvement.',
    image: 'https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506378/ken_btdzcv.jpg'
  },
  {
    name: 'Jessica Hernandez',
    title: 'Researcher at the University of Washington',
    quote: 'Your resume is the chief evangelist of your career and best instrument for securing employment.',
    image: 'https://res.cloudinary.com/dnsjdvzdn/image/upload/v1721506374/jess_vllxsq.jpg'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
    <h1 className="heading">Success Stories</h1>
      <p className='subheading'>Our ATS analyzer has helped numerous job seekers land their dream jobs. Here's what some of them have to say:</p>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.image} alt={testimonial.name} />
          <p>{testimonial.quote}</p>
          <p><br></br><br></br>— {testimonial.name} ({testimonial.title})</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
