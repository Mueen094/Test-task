import React, { Fragment } from 'react'
import EmailAddressCard from '../../components/cards/EmailAddressCard'
import EmailStatusCard from '../../components/cards/EmailStatusCard'
import EmailDetailForm from '../../components/forms/EmailDetailForm'
import ExportForm from '../../components/forms/ExportForm'
import DeliveryOptionCard from '../../components/cards/DeliveryOptionCard'
import { IoIosArrowBack } from 'react-icons/io'
const ForwardMails = () => {
  return (
    <Fragment>
      <div className="sticky w-full  top-0 flex justify-between shrink-0 items-center gap-x-4 border-b bg-[#f4f8f9] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 h-[58px]">
        <div className="flex w-[224px] h-[26px] gap-[16px] justify-between font-outfit text-[20px] leading-[25.2px] text-darkGray100">
          <span className="h-[26] w-[26] border-[1px] border-tableHeaderBg bg-white rounded-[4px]  flex items-center  justify-center  ">
            <IoIosArrowBack className="mt-[2px]" />
          </span>
          <p className="text-[19px] font-[500] font-outfit leading-[25.2px]">
            Forward Mail - <spam className="text-customBlue100">#4980</spam>
          </p>
        </div>
        <div className="h-[26px] w-[182px] flex gap-[8px]">
          <button className="flex items-center  justify-center font-outfit  w-[87px] h-[26px]  rounded-[4px] bg-white text-darkGray100 font-[400] text-[12px] leading-[14.4px]">
            Add Mail
          </button>
          <button className="flex items-center  justify-center font-outfit  w-[87px] h-[26px]   rounded-[4px] bg-white text-darkGray100 font-[400] text-[12px] leading-[14.4px]">
            Add Bulk Mail
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[56px] p-[40px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col  h-[324px] gap-[16px]">
              <EmailAddressCard
                tittle={'From:'}
                address={{
                  streetAddress: '66 W Flagler Street, Suite 900',
                  state: 'Miami, FL 33130, United States',
                }}
              ></EmailAddressCard>
              <EmailAddressCard
                tittle={'TO:'}
                address={{
                  streetAddress: '66 W Flagler Street, Suite 900',
                  state: 'Miami, FL 33130, United States',
                }}
              ></EmailAddressCard>
            </div>
            <EmailDetailForm></EmailDetailForm>
          </div>
          <div className="">
            <EmailStatusCard></EmailStatusCard>
          </div>
        </div>
        <ExportForm></ExportForm>
        <DeliveryOptionCard />
        <div className="flex justify-between">
          <button className="flex items-center gap-[10px] justify-center  w-[519px] h-[48px] px-[12px] py-[7px] rounded-[4px] bg-customBlue100 text-white font-outfit font-[400] text-[16px]">
            Purchase & Print Label
          </button>
          <button className="flex items-center gap-[10px] justify-center  w-[519px] h-[48px] px-[12px] py-[7px] rounded-[4px] bg-customBlue100 text-white font-outfit font-[400] text-[16px]">
            Forward Manualy
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default ForwardMails
