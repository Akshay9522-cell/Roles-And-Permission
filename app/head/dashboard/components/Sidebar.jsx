'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaEdit, FaUser } from 'react-icons/fa';
import { BsDisplay, BsShop, BsFillCartFill } from 'react-icons/bs';
import { MdOutlineRequestPage } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import {Toaster,toast} from 'react-hot-toast';




 export const Sidebar= ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
    
      <button
        className="fixed top-3 left-4 z-20 text-white p-2 rounded bg-[#184572] hover:bg-[#1d466f] transition-colors"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

     
      <div
        className={`absolute top-0 left-0 h-screen w-64 bg-[#1d466f] p-4 mt-18 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ marginRight: isOpen ? '0' : '64px' }}  
      >
        <div className="flex bg-[#184572] flex-col h-full ">
          <ul className=" mb-36 flex flex-col gap-5">
      
            <li>
              <Link
                href="/head/dashboard/user"
                className="text-white hover:underline text-lg font-semibold"
              >
                <FaHome className="inline-block mr-2" /> Users
              </Link>
            </li>
         
            <li>
              <Link
                href="/head/dashboard/role"
                className="text-white hover:underline text-lg font-semibold"
              >
                <BsDisplay className="inline-block mr-2" /> Role
              </Link>
            </li>
       
            <li>
              <Link
                href="/head/dashboard/permission"
                className="text-white hover:underline text-lg font-semibold"
              >
                <CiSearch className="inline-block mr-2" /> Permission
              </Link>
            </li>

            <li>
              <Link
                href="/head/dashboard/giveRole"
                className="text-white hover:underline text-lg font-semibold"
              >
                <CiSearch className="inline-block mr-2" /> Role allotment
              </Link>
            </li>

           
     
           
          
           
           
          </ul>
        </div>
      </div>

  
      {isOpen && (
        <div className="ml-64 transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
      <Toaster/>
    </>
  );
};

export default Sidebar;