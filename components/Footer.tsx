import React from 'react';
import Link from 'next/link';
import {DiGithubBadge} from "react-icons/di";
import {AiFillLinkedin} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";


const Footer = () => {
  return (
      <div className="text-center border-t border-slate-300 p-4 text-slate-400 ">
          <div>Built by Kondwani Ngulube</div>
          <br></br>
          <div className='flex space-x-4 justify-center'>
            <div>
              <Link href="https://github.com/kondwani7">
                <a className="text-3xl text-slate-700 text-center"><DiGithubBadge size={30}/></a>
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/kondwani-ngulube-4489ba174/">
                <a className="text-3xl text-slate-700 text-center"><AiFillLinkedin size={30}/></a>
              </Link> 
            </div>
            <div>
              <Link href="https://twitter.com/Kondwani_G">
                <a className="text-3xl text-slate-700 text-center"><FaTwitter size={30}/></a>
              </Link> 
            </div>
              
               
          </div>
          
          
         
      </div>
  )
};

export default Footer;
