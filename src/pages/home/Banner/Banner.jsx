import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import api from '../../../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../../components/LazyLoad/Img';
import useGetBanner from '../../../Hooks/useGetBanner/useGetBanner';

export default function Banner() {
  const [query, setQuery] = useState('');
  const { data, isLoading } = useGetBanner()
  const navigate = useNavigate();

  const background =
    api.ORIGINAL_IMG +
    data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

  const search = () => {
    if (query !== '') {
      navigate(`/search/${query}`);
      setQuery('');
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      {!isLoading && (
        <Img
          src={background}
          alt="Banner"
          className="object-cover h-screen md:h-[770px]"
        />
      )}
      <div className="w-full h-screen md:h-[770px] bg-gradient-to-t from-gray-900 absolute opacity-100"></div>
      <div className="absolute flex flex-col items-center justify-center p-5 text-center">
        <span className="font-bold  md:text-8xl text-5xl text-white">
          Welcome.
        </span>
        <span className="md:text-3xl text-sm font-semibold mb-10 text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <form onSubmit={search} className="flex flex-row items-center">
          <input
            type="text"
            placeholder="Find Movies or TV Shows"
            onChange={(e) => setQuery(e.target.value)}
            className="p-4 w-60 md:w-96 h-12 rounded-s-full outline-none"
          />
          <Link
            to={`/search/${query}`}
            className="p-4 h-12 rounded-e-full text-white bg-gradient-to-r from-purple-500 to-blue-500 flex items-center"
          >
            Search
          </Link>
        </form>
      </div>
    </div>
  );
}
