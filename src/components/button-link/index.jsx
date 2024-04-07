import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import PropTypes from 'prop-types'

const ButtonLink = ({ href = '', children, customStyle, isSelected = false }) => {
  return (
    <Link
      href={href}
      className={clsx('cursor-pointer hover:bg-[#2d2d2d] min-w-25 max-w-[200px]', {
        ['bg-grayLight']: isSelected
      })}
    >
      <div className={clsx('flex px-6 h-15 justify-center items-center', customStyle)}>
        <div className='whitespace-nowrap overflow-hidden text-ellipsis text-sm'>{children}</div>
      </div>
    </Link>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string,
  customStyle: PropTypes.string,
  isSelected: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default ButtonLink
