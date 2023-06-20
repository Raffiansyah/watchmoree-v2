import React from 'react'
import Banner from './Banner/Banner'
import Trending from './Trending/Trending'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'


export default function Home() {
  
  return (
    <div className='bg-gray-900'>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}
