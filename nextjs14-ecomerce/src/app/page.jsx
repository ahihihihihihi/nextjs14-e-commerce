'use client'

import Slider from '@/components/Slider/Slider';
import Categories from '@/components/Categories/Categories';
import Contact from '@/components/Contact/Contact';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';



export default function Home() {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type={"Featured"} />
      <Categories />
      <FeaturedProducts type={"Trending"} />
      <Contact />
    </div>
  )
}
