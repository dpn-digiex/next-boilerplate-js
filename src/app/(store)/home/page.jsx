import React from 'react'

import Card from '@/components/card'

const HomePage = () => {
  return (
    <div>
      <Card
        image='https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-1-2-650x650.png'
        name='iPhone 15 Pro Max'
        currentPrice='29.890.000₫'
        originPrice='34.990.000₫'
        discount='-14%'
        message='Online giá rẻ quá'
      />
    </div>
  )
}

export default HomePage
