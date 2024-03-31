import React from 'react'

import Footer from '@/layouts/footer'
import Header from '@/layouts/header'

const StoreLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default StoreLayout
