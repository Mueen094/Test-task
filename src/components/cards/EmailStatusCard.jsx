import React from 'react'

function EmailStatusCard() {
  return (
    <div className="h-[366px] w-[665px] rounded-[8px] p-[24px] flex flex-col gap-[16px] bg-Gray4">
      <div className="w-[617px] h-[254px] flex flex-col gap-[24px]  border-b-tableHeaderBg border-b-[1px]">
        <div className="flex justify-between">
          <div className="w-[46px] h-[19px] font-outfit text-darkGray100 text-[16px] font-[500] leading-[19.2px]">
            Status
          </div>
          <button
            type="button"
            className="flex items-center justify-center p-[12px] w-[154px] h-[33px] rounded-[4px]  bg-white border-tableHeaderBg border-[1px] font-outfit font-[400] text-[14px] leading-[16.8px]"
          >
            Forward Request
          </button>
        </div>
        <div className="w-[617px] h-[46px] flex flex-col gap-[8px]">
          <div className="flex justify-between font-outfit text-darkGray100 h-[19px] w-[617px] font-[500] text-[16px] leading-[19.2px]">
            <div>Customer</div>
            <div className=" w-[151px] h-[19px] border-b-darkGray100 border-b-[2px]">
              Gabriel Padilla Otero
            </div>
          </div>
          <div className="flex justify-between font-outfit text-darkGray100  h-[19px] w-[617px] font-[500] text-[16px] leading-[19.2px]">
            <div>QTY.</div>
            <div className="">1</div>
          </div>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="w-[617px] h-[46px] flex flex-col gap-[8px]">
          <div className="flex justify-between font-outfit text-darkGray100 h-[19px] w-[617px] font-[500] text-[16px] leading-[19.2px]">
            <div>Fee</div>
            <div className=" ">$0,00</div>
          </div>
          <div className="flex justify-between font-outfit text-darkGray100  h-[19px] w-[617px] font-[500] text-[16px] leading-[19.2px]">
            <div>Delivery</div>
            <div className="">$0,00</div>
          </div>
          <div className="flex justify-between font-outfit text-darkGray100  h-[19px] w-[617px] font-[500] text-[16px] leading-[19.2px]">
            <div>Total To Pay</div>
            <div className="">$0,00</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="flex items-center gap-[10px] justify-center  w-[180px] h-[48px] px-[12px] py-[20px] rounded-[4px] bg-customBlue100 text-white font-outfit font-[400] text-[14px]">
          Purchase & Print Label
        </button>
      </div>
    </div>
  )
}

export default EmailStatusCard
