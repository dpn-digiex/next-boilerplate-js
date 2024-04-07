'use client'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SeachComponent = () => {
  return (
    <>
      <div className='w-9 h-9 rounded-full flex items-center justify-center bg-[#2f3033] hover:bg-[#545454] cursor-pointer'>
        <CiSearch size={18} />
      </div>
    </>
  )
}

export default SeachComponent
