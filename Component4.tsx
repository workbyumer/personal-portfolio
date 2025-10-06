import React from 'react';

const Component4 = () => {
  return (
    <div className='flex  p-4 border-b  gap-5'>
      <div>
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Your Message'></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default Component4;
