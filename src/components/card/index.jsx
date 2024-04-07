import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import './index.style.css'

const Card = ({ image, name, currentPrice, originPrice, discount, message }) => {
  return (
    <Link className='card' href=''>
      <div className='flex flex-col gap-6'>
        <Image
          alt={name}
          src={image}
          width={250}
          height={250}
          priority
          className='w-64 h-64 object-cover object-center'
        />
        <h3 className='text-base text-white text-center'>{name}</h3>
      </div>
      <div className='flex items-center gap-1.5 justify-center mt-5'>
        <span className='text-lg font-bold'>{currentPrice}</span>
        <strike className='text-sm'>{originPrice}</strike>
        <small>{discount}</small>
      </div>
      <p className='text-[#ff9f00] text-center'>{message}</p>
    </Link>
  )
}

export default Card
