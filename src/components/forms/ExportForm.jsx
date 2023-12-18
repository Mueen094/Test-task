import React, { useState } from 'react'
import ExportDataCard from '../cards/ExportDataCard'
import { FaPlus } from 'react-icons/fa6'

function ExportForm() {
  let sampleData = [1, 2, 3, 4, 5]
  return (
    <div className="h-[649px] w-full flex flex-col gap-[39px]">
      <div className="flex justify-between h-[41] gap-[10px]">
        <span className="">Reason For Export</span>
        <button className="flex items-center gap-[10px] justify-center  w-[134px] h-[41px] px-[12px] py-[7px] rounded-[4px] bg-customBlue100 text-white font-outfit font-[400] text-[14px]">
          Find Rates
        </button>
      </div>
      <div className="h-[59px] flex flex-col gap-[4px]">
        <div className="h-[14px] text-[12px] leading-[14.3px] text-gray70">
          Select reason
        </div>
        <select
          id="location"
          name="location"
          className="flex h-[41px]  rounded-[4px] p-[12px] text-[14px] font-[400] font-outfit text-darkGray100 leading-[16.8px]   border-tableHeaderBg border-[1px] focus:ring-0 focus:ring-offset-0  focus:border-tableHeaderBg"
          defaultValue="Canada"
        >
          <option className="text-[14px] font-[400] font-outfit text-darkGray100">
            Document
          </option>
        </select>
      </div>
      <div className="h-[441px]  flex flex-col justify-between">
        {sampleData?.map((data) => (
          <ExportDataCard></ExportDataCard>
        ))}
        <div className="w-full h-[40px] border flex justify-center items-center text-[12px] font-[500] font-outfit gap-[10px] text-[#7E838F] bg-[#fcfcfc]">
          <button className="border-0 outline-0">REFRESH</button>
          <span>
            <FaPlus />
          </span>
        </div>
        <div className="w-full h-[40px] border flex justify-center items-center text-[12px] font-[500] font-outfit gap-[10px] text-[#86d1dc]">
          Please fill in at least one item (HS code, description, weight, value)
        </div>
      </div>
    </div>
  )
}

export default ExportForm
