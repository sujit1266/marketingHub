import React from 'react';
import serImg from "../../public/img/ser-img1.gif";
import Image from "next/image";



export default function ServiceCard(props) {
     return (
          <div className='bg-[#ffffff] p-10 h-[670px] rounded-lg shadow shadow-[rgba(254.25, 159.51527773296382, 137.73718066008)] relative'>
               <Image src={serImg} alt='service image'/>
               <h1 className='text-3xl text-[#ffa550] font-bold w-[70%] text-center mx-auto mt-10'>{props.heading}</h1>
               <p>{props.desc}</p>
               <div className='mx-auto bg-[#ff4b26] w-[70px] h-[70px] rounded-full flex justify-center items-center absolute bottom-[-40px] left-[43%]'>
                    <span className='text-white text-2xl'>+</span>
                    </div>
          </div>
     )
}
