import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';

const Homepage = () => {
  return (
    <div>
      <Component1 />
      <div className='border border-b-black w-screen'></div>
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
};

export default Homepage;
