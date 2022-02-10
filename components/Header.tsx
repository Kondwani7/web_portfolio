import React from 'react';
import {MdPhone} from "react-icons/md";
import {MdOutlineMail} from 'react-icons/md';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='text-center border-b border-slate-300 p-4 text-gray-500'>
        <div className='text-2xl font-bold'>Kondwani Ngulube</div>
        <div>Software Developer</div>
        <div className='flex justify-center gap-4 text-sm'>
        <div style={{display: "flex", justifyContent: "center", gap:"2px"}}>
          <MdPhone size={18}/>
          <span>+260978964998</span>
        </div>
        <div style={{display: "flex", justifyContent: "center", gap:"2px"}}>
          <MdOutlineMail size={20}/>
          <span>kondwanigideon.ngulube@gmail.com</span>
        </div>
        </div>
          
    </div>
  
);
};

export default Header;
