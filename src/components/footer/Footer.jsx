import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-slate-800 text-white p-10">
      <ul className="flex gap-4 md:gap-8 mb-5 md:mb-8 text-xs md:text-base">
        <li className="hover:cursor-pointer hover:text-blue-500">
          Terms Of Use
        </li>
        <li className="hover:cursor-pointer hover:text-blue-500">
          Privacy-Policy
        </li>
        <li className="hover:cursor-pointer hover:text-blue-500">About</li>
        <li className="hover:cursor-pointer hover:text-blue-500">Blog</li>
        <li className="hover:cursor-pointer hover:text-blue-500">FAQ</li>
      </ul>
      <p className="w-full md:w-3/4 opacity-70 text-center mb-10 text-xs md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
        doloremque, odio, modi culpa adipisci aspernatur nostrum qui temporibus
        laboriosam optio dicta natus facere earum commodi quisquam fugit error!
        Numquam dolorum earum nulla vero nesciunt aliquam. Modi obcaecati culpa,
        fuga nostrum explicabo ad officiis. Fugit, distinctio.
      </p>
      <p className='text-xs md:text-base'>© 2023 WatchmoreeV2 | All rights reserved | MRA</p>
    </footer>
  );
}
