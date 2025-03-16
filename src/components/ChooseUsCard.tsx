import React from 'react';
import Image, { StaticImageData } from 'next/image';


interface ChooseUsCardProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  image?: StaticImageData;
  text?: string;
}


function ChooseUsCard(props: Readonly<ChooseUsCardProps>) {
  return (
    <div className='flex flex-col items-center w-[400px]'>
      <Image 
          src={props.image}
          alt='service img'
          height={200}
          width={200}
          className='rounded-full'
      />
      <h2 className='text-2xl font-bold'>{props.title}</h2>
      <p className='text-md text-center'>{props.text}</p>
    </div>
  )
}

export default ChooseUsCard;
