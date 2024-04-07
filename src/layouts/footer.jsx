import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { GoShieldCheck } from 'react-icons/go'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { MdOutlineSettingsBackupRestore } from 'react-icons/md'
import { SiZalo } from 'react-icons/si'
import { TbTruckDelivery } from 'react-icons/tb'
import Link from 'next/link'

const FOOTER_SECTIONS = {
  STORES: {
    TITLE: 'Hệ thống cửa hàng',
    ITEMS: [
      {
        TITLE: 'Xem cửa hàng gần bạn',
        LINK: '/'
      },
      {
        TITLE: 'Nội quy cửa hàng',
        LINK: '/'
      },
      {
        TITLE: 'Chất lượng phục vụ',
        LINK: '/'
      },
      {
        TITLE: 'Chính sách bảo hành và đổi trả',
        LINK: '/'
      }
    ]
  },
  SUPPORTER: {
    TITLE: 'Hỗ trợ khách hàng',
    ITEMS: [
      {
        TITLE: 'Điều kiện giao dịch',
        LINK: '/'
      },
      {
        TITLE: 'Hướng dẫn mua hàng online',
        LINK: '/'
      },
      {
        TITLE: 'Chính sách giao hàng',
        LINK: '/'
      },
      {
        TITLE: 'Hướng dẫn thanh toán',
        LINK: '/'
      }
    ]
  },
  BRAND: {
    TITLE: 'Về thương hiệu',
    ITEMS: [
      {
        TITLE: 'Giới thiệu thương hiệu',
        LINK: '/'
      },
      {
        TITLE: 'Bán hàng doanh nghiệp',
        LINK: '/'
      },
      {
        TITLE: 'Chính sách xử lý dữ liệu cá nhân',
        LINK: '/'
      }
    ]
  },
  GUARANTEE: {
    TITLE: 'Trung tâm bảo hành',
    ITEMS: [
      {
        TITLE: 'Giới thiệu trung tâm bảo hành',
        LINK: '/'
      }
    ]
  }
}

const Footer = () => {
  return (
    <footer className='w-full overflow-hidden'>
      <div className='w-full bg-bgGray'>
        <div className='container flex flex-wrap py-5'>
          <div className='flex-1 w-1/4 flex flex-col items-center gap-2'>
            <IoMdCheckmarkCircleOutline size={52} />
            <span className='text-md text-center'>
              Mẫu mã đa dạng, <br /> chính hãng
            </span>
          </div>
          <div className='flex-1 w-1/4 flex flex-col items-center gap-2'>
            <TbTruckDelivery size={52} />
            <span className='text-md text-center'>Giao hàng toàn quốc</span>
          </div>
          <div className='flex-1 w-1/4 flex flex-col items-center gap-2'>
            <GoShieldCheck size={52} />
            <span className='text-md text-center'>
              Bảo hành chính hãng <br /> tới 12 tháng
            </span>
          </div>
          <div className='flex-1 w-1/4 flex flex-col items-center gap-2'>
            <MdOutlineSettingsBackupRestore size={52} />
            <span className='text-md text-center'>
              Đổi trả theo <br /> chính sách cửa hàng
            </span>
          </div>
        </div>
      </div>

      <div className='w-full bg-bgBlack'>
        <div className='container flex flex-col'>
          <Link href={'/'} className='max-w-[200px]'>
            <div className='py-8'>LOGO_STORE</div>
          </Link>
          <div className='flex flex-wrap pb-8'>
            <div className='flex-1 w-1/5 flex flex-col min-w-[120px] gap-1'>
              <p className='text-md'>Tổng đài</p>
              <span className='text-xs'>
                Mua hàng:{' '}
                <a href='tel:+84947443064' className='text-[#2997ff] ml-2'>
                  0947443064
                </a>
              </span>
              <span className='text-xs'>
                Khiếu nại:{' '}
                <a href='tel:+84947443064' className='text-[#2997ff] ml-2'>
                  0947443064
                </a>
              </span>
              <span className='text-sm text-[#888]'>Kết nối với chúng tôi</span>
              <div className='flex items-center gap-2'>
                <a href='https://www.facebook.com/profile.php?id=100048079039838' target='_blank' rel='noreferrer'>
                  <div className='w-8 h-8 rounded-full cursor-pointer bg-bgGray flex items-center justify-center hover:bg-grayLight'>
                    <SiZalo size={20} />
                  </div>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100048079039838' target='_blank' rel='noreferrer'>
                  <div className='w-8 h-8 rounded-full cursor-pointer bg-bgGray flex items-center justify-center hover:bg-grayLight'>
                    <FaFacebookF size={20} />
                  </div>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100048079039838' target='_blank' rel='noreferrer'>
                  <div className='w-8 h-8 rounded-full cursor-pointer bg-bgGray flex items-center justify-center hover:bg-grayLight'>
                    <FaTiktok size={20} />
                  </div>
                </a>
              </div>
            </div>
            {Object.keys(FOOTER_SECTIONS).map((key, index) => {
              return (
                <div key={`footer-section-${index}`} className='flex-1 w-1/5 flex flex-col min-w-[120px]'>
                  <p className='text-md'>{FOOTER_SECTIONS[key].TITLE}</p>
                  {FOOTER_SECTIONS[key].ITEMS.map((item, index) => {
                    return (
                      <Link key={`footer-item-${index}`} href={item.LINK}>
                        <span className='text-xs cursor-pointer hover:text-[#2997ff]'>{item.TITLE}</span>
                      </Link>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
