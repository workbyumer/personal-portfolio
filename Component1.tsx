import React from 'react';
import IMAGEPROFILE from '/public/image-profile-desktop.webp';

const Component1 = () => {
  return (
    <div className='flex justify-between p-4 border-b'>
      <div>
        <h1>
          Nice to meet you! <span>I'm Umer Bin Ubaid</span>
        </h1>
        <p>
          Based in Pakistan. I'm MERN Stack Developer who is passionate about
          building accessible web apps that users love.
        </p>
        <button>Contact Me</button>
      </div>
      <div>
        <img
          src={'https://placehold.co/600x800/000000/FFF'}
          alt='Profile Image'
          width={200}
        />
      </div>
    </div>
  );
};

export default Component1;
