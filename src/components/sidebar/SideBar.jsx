import React from 'react'
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/20/solid'
import logo from '../../assets/LOGO.png'
import userImg from '../../assets/Ellipse 658.png'

const pages = [
  {
    name: 'Virtual Mailbox',
    href: '#',
    current: true,
    icon: EnvelopeIcon,
  },
  {
    name: 'Live Miami',
    href: '#',
    current: false,
    icon: ChatBubbleLeftEllipsisIcon,
  },
]

function SideBar({ navigation, classNames }) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-[67px] lg:overflow-y-hidden bg-[#ffffff ] border-[1px] border-[#E7EEEF] gap-[24px] lg:pb-4 lg:px-[16px]">
      <div className="flex flex-col  gap-[16px] items-center justify-center mt-4 pb-[16px]">
        <div className="w-[55px] pb-[16px] h-[48px] flex justify-center items-center border-b-[1px] border-[#E7EEEF]">
          <img className="h-8 w-auto" src={logo} alt="Your Company" />
        </div>
        <div className="w-[55px] pb-[16px] h-[52px] flex justify-center items-center border-b-[1px] border-[#E7EEEF]">
          <img
            className="inline-block h-[36px] w-[36px] rounded-full"
            src={userImg}
            alt="userImg"
          />
        </div>
      </div>
      <nav className="flex flex-col items-center gap-[24px]">
        <div className="w-[32px] h-[56px] pb-[24px] border-b-[1px] flex justify-center items-center border-[#E7EEEF]">
          <span className="w-[32px] h-[32px] rounded-[8px] p-[8px] border-[1px]  border-[#E7EEEF]">
            <MagnifyingGlassIcon />
          </span>
        </div>
        <ul
          role="list"
          className="flex flex-col items-center w-[36px] h-[336px] gap-[8px] border-b-[1px]  border-[#E7EEEF] pb-[24px]"
        >
          {navigation.map((item) => (
            <li
              key={item.name}
              className=" relative w-[32px] h-[32px] rounded-[8px] p-[8px] flex justify-center items-center"
            >
              <a href={item.href} className="">
                <item.icon
                  className="h-[16px] w-[16px] text-[#bbc1c7]"
                  aria-hidden="true"
                />
              </a>
              {item.isNotifaction && (
                <span className=" absolute w-[12px] h-[12px] top-[2px] right-[2px] rounded-[4px] border-[1px] border-[#FFFFFF] font-outfit text-[4px] bg-[#6bbffc] flex justify-center items-center text-white">
                  12
                </span>
              )}
            </li>
          ))}
        </ul>
        <ul className='w-[36px] h-[96px] border-b-[1px] text-[#bbc1c7] pb-[24px] "flex flex-col items-center gap-[8px]'>
          {pages.map((pag) => (
            <li className=" relative rounded-[8px] w-[32px] h-[32px] p-[8px] flex justify-center items-center">
              <pag.icon
                className={`h-[16px] w-[16px] font-[700] ${
                  pag.current ? 'text-gray100' : 'text-[#bbc1c7]'
                } `}
              />
              <span className=" absolute w-[12px] h-[12px] top-0 right-0 rounded-[4px] border-[1px] border-[#FFFFFF] font-outfit text-[4px] bg-[#6bbffc] flex justify-center items-center text-white">
                12
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
