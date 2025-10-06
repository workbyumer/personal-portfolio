import React from 'react';
import IMAGEPROFILE from '/public/image-profile-desktop.webp';

const Component2 = () => {
  const technicalSkills = [
    { skill: 'HTML', experience: '4 Year Experince' },
    { skill: 'CSS', experience: '4 Year Experince' },
    { skill: 'JavaScript', experience: '3 Year Experince' },
    { skill: 'ReactJS', experience: '2 Year Experince' },
    { skill: 'NodeJS', experience: '2 Year Experince' },
    { skill: 'ExpressJS', experience: '2 Year Experince' },
    { skill: 'MongoDB', experience: '2 Year Experince' },
  ];
  return (
    <div className='flex  p-4 border-b'>
      <ul className='flex justify-between gap-5'>
        {technicalSkills.map((item, index) => (
          <li key={item.skill}>
            <h1>{item.skill}</h1>
            <p>{item.experience}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component2;
