import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className="container">
        <h1 className="title">About VisonaryGerm</h1>
        <p className="text-black text-lg">
        VisionaryGerm is an online art museum dedicated to curating and displaying an
        exquisite collection of artworks from across the globe. As an art enthusiast,
        a visitor, or a connoisseur, you are invited to immerse yourself in the world
         of artistic brilliance and creativity. Our platform celebrates the rich 
         cultural heritage and diverse artistic expressions that have shaped human 
         history and continue to inspire generations.
        </p>
      </div>

      <div className="container">
        <h1 className="title">Reach Us</h1>

        <div className='flex items-center mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
        className="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
        <p className="text-black text-lg">Email: visonarygerm@gmail.com</p>
        </div>
        <div className='flex items-center mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        className="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
        <p className="text-black text-lg">Phone: +254768378476</p>
        </div>
        <div className='flex flex-row mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
        className="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
        <p className="text-black text-lg">Location: Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default About;
