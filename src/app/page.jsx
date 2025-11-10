import Header from '@/components/Header'
import React from 'react'
import Tags from '@/components/Tags'
import ClothingSlider from '@/components/cards/basicCard'

const page = () => {
  return (
    <>
      <div className='bg-white text-black w-full min-h-dvh '>
        <div className='shadow-md border-b-[0.5px] border-gray-200' >
          <Header />
        </div>
        <Tags />
        <ClothingSlider />
      </div>
    </>
  )
}

export default page
