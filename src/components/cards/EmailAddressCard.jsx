import React from 'react'
import { Cog6ToothIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'

function EmailAddressCard({ tittle, address }) {
  return (
    <div className="bg-Gray4 w-[548px] h-[154px] rounded-[8px] border-[1px] p-[24px] flex flex-col gap-[16px] border-tableHeaderBg">
      <div className="flex flex-wrap items-center justify-between w-[500px] h-[30px] sm:flex-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 items-center font-outfit font-[600] text-[24px] leading-[30.24px]">
            {tittle}
          </div>
        </div>

        <div className="h-[26px] w-[115px] gap-[16px] flex">
          <button
            type="button"
            className="flex justify-around w-[73px] h-[26px] rounded-[4px] px-[6px] py-[12px] relative  items-center bg-white border-tableHeaderBg border-[1px]"
          >
            <Cog6ToothIcon class="w-[12px] h-[12px] text-customBlue100" />
            <span className="w-[22px] h-[14px] font-[400] leading-[14.4px] font-outfit text-[12px] text-gray100 ">
              Edit
            </span>
          </button>
          <button
            type="button"
            className="flex items-center w-[26px] h-[26px] rounded-[4px]  bg-white border-tableHeaderBg border-[1px]"
          >
            <ChevronLeftIcon class="w-[16px] h-[16px] font-outfit  text-gray100" />
          </button>
        </div>
      </div>
      <div className="w-[500px] h-[60px] flex flex-col gap-[16px]">
        <div className="w-[187px] h-[18px] font-outfit text-[14px] font-[400]">
          {address?.streetAddress}
        </div>
        <div className="w-[190px] h-[18px] font-outfit text-[14px] font-[400]">
          {address?.state}
        </div>
      </div>
    </div>
  )
}

export default EmailAddressCard
