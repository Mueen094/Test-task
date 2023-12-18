import React from 'react'

const StorageCard = () => {
  return (
    <div className=" md:h-[295px] flex  flex-col md:flex-row items-center gap-[24px]">
      <div className="flex-1 h-[295px] w-full rounded-[16px] relative border-[1px] flex-col flex items-center gap-[24px]  border-[#E9F3F5] p-[24px]">
        <div className="flex justify-between  w-full">
          <div className="flex flex-col items-start gap-1 font-outfit">
            <h3 className=" text-[22px] font-[500] leading-[27px] text-gray100">
              Total Storage
            </h3>
            <small className="text-[12px] font-[400] text-[#99a1ab]">
              Last 6 month
            </small>
          </div>
          <div className="flex flex-col gap-1 items-start font-outfit">
            <h3 className="text-[24px] font-[500] leading-[24px] text-[#d5d7da]">
              $12,540
            </h3>
            <small className="text-[#dbf1f5]">+ $2,504</small>
          </div>
        </div>
        <div className="w-full md:h-[169px] flex flex-col justify-between ">
          <div className="md:w-[519px] w-full h-[97px] mt-[20px] flex items-start justify-between flex-col gap-[20px] ">
            <div className="md:w-[510px] h-[32px]  flex items-center ">
              <div className="md:w-[195px] h-[32px] rounded-br-4 rounded-bl-4 border-[0.78px] px-[26.52px] py-[6.24px] flex items-center justify-center font-outfit text-[10px]  font-[500] leading-[16px] text-[#d5d7da]">
                $6,540
              </div>
              <div className="md:w-[316px] h-[32px] rounded-br-4 rounded-bl-4 border-[0.78px] border-[#c9ebef] px-[26.52px] py-[6.24px] flex items-center justify-center font-outfit text-[10px] font-[500] leading-[16px] text-[#d5d7da] bg-[#e9f7f9]">
                +$10,504
              </div>
              <span className="w-[32px] font-outfit h-[18px] rounded-[3px] flex items-center justify-center border-[1px]  py-[8px] px-[8px] -rotate-90 text-white bg-[#c6c9cd] text-[8px]">
                %25
              </span>
            </div>
            <div className="md:w-[307px]  h-[32px]  flex items-center">
              <div className="md:w-[150px] h-[32px]  rounded-br-4 rounded-bl-4 border-[0.78px] px-[26.52px] py-[6.24px] flex items-center justify-center font-outfit text-[10px] font-[500] leading-[16px] text-[#d5d7da]">
                $6,010
              </div>
              <div className="md:w-[158px] h-[32px] rounded-br-4 rounded-bl-4 border-[0.78px] border-[#c9ebef] px-[26.52px] py-[6.24px] flex items-center justify-center font-outfit text-[10px] font-[500] leading-[16px] text-[#d5d7da] bg-[#e9f7f9]">
                +$8,002{' '}
              </div>
              <span className="md:w-[32px] font-outfit h-[18px] rounded-[3px] flex items-center justify-center border-[1px] py-[8px] px-[8px] -rotate-90 text-white bg-[#c6c9cd] text-[8px]">
                %10
              </span>
            </div>
          </div>
          <div className="w-full h-[40px] flex justify-between items-end">
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              0
            </span>
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              $76
            </span>
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              $20k
            </span>
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              $8k
            </span>
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              $50k
            </span>
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              $81k
            </span>
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              $25k
            </span>
            <span className="text-[8px] font-outfit leading-[16px] font-[500] text-[#d5d7da]">
              $55k
            </span>

            <span className="h-[160px] border-r-[2px] border-[#c9ebef] border-dashed w-[3px]  absolute left-[480px] bottom-12"></span>
          </div>
        </div>
      </div>

      <div className="flex-1 md:h-[295px] w-full rounded-[16px] border-[1px] flex items-center flex-col gap-[14px]  border-[#E9F3F5] p-[24px]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start gap-1 font-outfit">
            <h3 className=" text-[22px] font-[500] leading-[27px] text-gray100">
              Urgent
            </h3>
            <small className="text-[12px] font-[400] text-[#99a1ab]">
              Last 6 month
            </small>
          </div>
          <div className="flex flex-col gap-1 items-start font-outfit">
            <h3 className="text-[24px] font-[500] leading-[24px] text-[#d5d7da]">
              93 days
            </h3>
            <small className="text-[#dbf1f5]">+ 90 days</small>
          </div>
        </div>
        <div className="w-full h-[169px] bg-[#f6f7f8] rounded-[8px]"></div>
      </div>
    </div>
  )
}

export default StorageCard
