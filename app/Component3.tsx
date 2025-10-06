import React from 'react';

const Component3 = () => {
  const technicalSkills = [
    {
      project: 'Desgin Portfolio1',
      skill: 'HTML',
      experience: '4 Year Experince',
      image: 'https://placehold.co/600x400/000000/FFF',
    },
    {
      project: 'Desgin Portfolio2',
      skill: 'HTML',
      experience: '4 Year Experince',
      image: 'https://placehold.co/600x400/000000/FFF',
    },
    {
      project: 'Desgin Portfolio3',
      skill: 'HTML',
      experience: '4 Year Experince',
      image: 'https://placehold.co/600x400/000000/FFF',
    },
    {
      project: 'Desgin Portfolio4',
      skill: 'HTML',
      experience: '4 Year Experince',
      image: 'https://placehold.co/600x400/000000/FFF',
    },
  ];
  return (
    <div className='flex  p-4 border-b flex-col gap-5'>
      <div className='flex justify-between w-full'>
        <h1>Projects</h1>
        <button>Contact Me</button>
      </div>
      <ul className='flex justify-between gap-5'>
        {technicalSkills.map((item, index) => (
          <li key={item.project}>
            <img alt={item.project} src={item.image} />
            <h1>{item.project}</h1>
            <p>{item.skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component3;
