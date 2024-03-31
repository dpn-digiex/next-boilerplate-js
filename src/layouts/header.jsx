import React from 'react'
import Link from 'next/link'

const PAGE_ROUTES = {
  HOME: {
    PATH: '/',
    TITLE: 'Trang chủ'
  },
  CART: {
    PATH: '/cart',
    TITLE: 'Giỏ hàng'
  },
  PAYMENT: {
    PATH: '/payment',
    TITLE: 'Thanh toán'
  },
  PRODUCT: {
    PATH: '/product',
    TITLE: 'Sản phẩm'
  }
}

const Header = () => {
  return (
    <header className='w-full h-[60px] border-b border-gray-200'>
      <div className='flex px-4 py-2 items-center gap-2'>
        {Object.keys(PAGE_ROUTES).map((key) => {
          return (
            <Link key={key} href={PAGE_ROUTES[key].PATH}>
              <div className='p-2'>{PAGE_ROUTES[key].TITLE}</div>
            </Link>
          )
        })}
      </div>
    </header>
  )
}

export default Header
