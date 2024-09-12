import React from 'react';
import MyImage from '../components/myImage';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <div>
      <div>home</div>
      <div>home1</div>
      <div className="grid grid-cols-4 gap-10">
        <MyImage src="/assets/1.jpg" alt="" />
        <MyImage src="/assets/1.jpg" alt="" />
      </div>
      <div>next feauture</div>
      <Slideshow />
    </div>
  );
}
