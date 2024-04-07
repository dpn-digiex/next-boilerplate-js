import React from 'react'

import Footer from '@/layouts/footer'
import Header from '@/layouts/header'

const StoreLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <section className='container min-h-[50vh]'>{children}</section>
      <Footer />
    </div>
  )
}

export default StoreLayout
