import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-slate-800 text-white relative">
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
        <Link to="/" className="text-2xl font-semibold">
          Watchmoree V2
        </Link>
      </div>
      <ul className="hidden md:flex items-center gap-5 text-lg font-medium">
        <li>
          <Link
            to="/explore/movie"
            className="hover:border-b-2 hover:border-b-blue-500"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/explore/tv"
            className="hover:border-b-2 hover:border-b-blue-500"
          >
            TV Shows
          </Link>
        </li>
      </ul>
      <button type="button" className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>
      <ul
        className={
          nav
            ? 'fixed right-3 top-[68px] bg-slate-800 p-5 flex flex-col gap-y-5 z-10'
            : 'hidden'
        }
      >
        <li>
          <Link to="/explore/movie">Movies</Link>
        </li>
        <li>
          <Link to="/explore/tv">TV Shows</Link>
        </li>
      </ul>
    </header>
  );
}
