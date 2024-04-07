'use client'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ButtonLink from '@/components/button-link'
import SeachComponent from '@/components/search'
import { ROUTES_APP } from '@/constants'

const MENU_HEADER = {
  IPHONE: {
    PATH: ROUTES_APP.PRODUCT.IPHONE,
    TITLE: 'iPhone'
  },
  MAC: {
    PATH: ROUTES_APP.PRODUCT.MAC,
    TITLE: 'Mac'
  },
  IPAD: {
    PATH: ROUTES_APP.PRODUCT.IPAD,
    TITLE: 'iPad'
  },
  WATCH: {
    PATH: ROUTES_APP.PRODUCT.WATCH,
    TITLE: 'Watch'
  },
  SOUND: {
    PATH: ROUTES_APP.PRODUCT.SOUND,
    TITLE: 'Tai nghe, Loa'
  },
  ACCESSORIES: {
    PATH: ROUTES_APP.PRODUCT.ACCESSORIES,
    TITLE: 'Phụ kiện'
  },
  BLOG: {
    PATH: ROUTES_APP.BLOG,
    TITLE: 'Blog Công nghệ'
  }
}

const Header = () => {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-[1000] w-full h-15  bg-bgBlack'>
      <div className='container h-full flex items-center justify-between '>
        <div className='mr-12'>
          <ButtonLink href='/' customStyle='justify-start px-0'>
            LOGO_STORE
          </ButtonLink>
        </div>
        <div className='flex items-center'>
          {Object.keys(MENU_HEADER).map((key, index) => {
            return (
              <ButtonLink
                key={`menu-header-${index}`}
                href={MENU_HEADER[key].PATH}
                isSelected={pathname.includes(MENU_HEADER[key].PATH)}
              >
                {MENU_HEADER[key].TITLE}
              </ButtonLink>
            )
          })}
        </div>
        <div className='ml-12 flex items-center justify-center gap-2'>
          <SeachComponent />
          <Link href={ROUTES_APP.CART}>
            <div className='w-9 h-9 rounded-full flex items-center justify-center bg-[#2f3033] hover:bg-[#545454] cursor-pointer'>
              <HiOutlineShoppingBag />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
