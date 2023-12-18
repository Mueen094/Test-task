import React from 'react'
import { FaPlus } from 'react-icons/fa6'

function DeliveryOptionCard() {
  let optionSampleData = [1, 2, 3, 4, 5]
  return (
    <div className="h-[667px] w-full  flex flex-col gap-[40px]">
      <div className="block text-[24px] h-[30px] leading-[30.24px] font-[500] text-darkGray100">
        Delivery Options
      </div>
      <div className="h-[607px] w-full flex flex-wrap gap-[24px] ">
        {optionSampleData?.map((data) => (
          <div className="w-[673.5px] h-[165px] rounded-[8px] border-[1px] p-[24px] border-tableHeaderBg flex gap-[16px]">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-[16px] w-[16px] mt-3 rounded text-customBlue100  border-customBlue100 border-[2px] focus:ring-0 focus:ring-offset-0"
            />
            <div className="flex flex-col gap-[16px]  w-[554.5px] h-[117px]">
              <div className="w-full h-[41px] flex justify-between items-center">
                <h3 className="font-[600] text-[24px] text-darkGray100 font-outfit">
                  FedEx
                </h3>
                <div className="w-[88px] h-[41px] flex justify-center items-center rounded-[4px] border-[1px] bg-gray10">
                  $0,00
                </div>
              </div>

              <h3 className="font-outfit text-[14px] font-[400] leading-[18px]">
                FEDEX_INTERNATIONAL_PRIORITY
              </h3>
              <p className="text-[14px] h-[18px] font-outfit font-[400] leading-[17.64px] text-customBlue100">
                Delivered on or before Wednesday, October 18, 2023
              </p>
            </div>
          </div>
        ))}

        <div className="w-full h-[40px] border flex justify-center items-center text-[12px] font-[500] font-outfit gap-[10px] text-[#7E838F] bg-[#fcfcfc]">
          <button className="border-0 outline-0">REFRESH</button>
          <span>
            <FaPlus />
          </span>
        </div>
      </div>
    </div>
  )
}

export default DeliveryOptionCard
