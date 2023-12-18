import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import flag from '../../assets/Group.png'
function ExportDataCard() {
  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue(value + 1)
  }

  const handleDecrement = () => {
    setValue(value - 1)
  }
  return (
    <div className="w-full h-[59px]  flex items-center gap-[14px] justify-between">
      <div className="w-[188px] h-[59px]  flex items-center gap-[4px]">
        <div className=" w-[88px] flex flex-col items-start gap-[2px]">
          <small className="text-[12px] font-[400] leading-[14.3px] font-outfit text-gray70">
            QYT
          </small>
          <div className="w-[88px] relative rounded-[4px] border-[1px] ">
            <input
              type="number"
              className="w-full bg-gray10 border-0"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <div className="w-[40px] h-[33px] flex flex-col items-center justify-center bg-customBlue100 absolute right-1 top-1 rounded-[2px]">
              <button onClick={handleDecrement} className="text-white">
                <IoIosArrowUp />
              </button>
              <button onClick={handleIncrement} className="text-white">
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[88px]  flex flex-col items-start gap-[2px]">
          <small className="text-[12px] font-[400] leading-[14.3px] font-outfit text-gray70">
            MS code (1)
          </small>
          <div className="w-[88px] h-[41px] flex justify-center items-center relative rounded-[4px] border-[1px] bg-gray10">
            4817
          </div>
        </div>
      </div>
      <div className="w-[386.5px] h-[59px]  flex flex-col items-start gap-[2px]">
        <small className="text-[12px] font-[400] leading-[14.3px] font-outfit text-gray70">
          Description
        </small>
        <div className="w-full h-[41px] flex pl-2 items-center justify-start relative rounded-[4px] border-[1px]">
          Negative
        </div>
      </div>
      <div className="w-[188px] h-[59px] flex items-center gap-[4px]">
        <div className=" w-[88px] flex flex-col items-start gap-[2px]">
          <small className="text-[12px] font-[400] leading-[14.3px] font-outfit text-gray70">
            Weight (OZ)
          </small>
          <div className="w-[88px] relative rounded-[4px] border-[1px] ">
            <input
              type="number"
              className="w-full bg-gray10 border-0"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <div className="w-[40px] h-[33px] flex flex-col items-center justify-center bg-customBlue100 absolute right-1 top-1 rounded-[2px]">
              <button onClick={handleDecrement} className="text-white">
                <IoIosArrowUp />
              </button>
              <button onClick={handleIncrement} className="text-white">
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[88px]  flex flex-col items-start gap-[2px]">
          <small className="text-[12px] font-[400] leading-[14.3px] font-outfit text-gray70">
            Value (?)
          </small>
          <div className="w-[88px] h-[41px] flex justify-center items-center relative rounded-[4px] border-[1px] bg-gray10">
            $0,00
          </div>
        </div>
      </div>
      <div className="w-[386.5px] h-[59px] flex flex-col items-start gap-[2px]">
        <small className="text-[12px] font-[400] leading-[14.3px] font-outfit text-gray70">
          Origin
        </small>
        <div className="w-full relative">
          <select className="w-full  flex pl-8 items-center justify-start relative rounded-[4px] border-tableHeaderBg border-[1px] focus:ring-0 focus:ring-offset-0  focus:border-tableHeaderBg ">
            <option className="px-20  bg-white">United State</option>
            <option className="px-20  bg-white">United State</option>
            <option className="px-20  bg-white">United State</option>
          </select>
          <img src={flag} alt="flag" className=" absolute top-4 left-2" />
        </div>
      </div>
      <div className="w-[88px] h-[59px] flex flex-col items-start gap-[2px]">
        <small className="text-[12px] font-[400] leading-[14.3px] font-outfit text-gray70">
          Declared Value
        </small>
        <div className="w-[88px] h-[41px] flex justify-center items-center relative rounded-[4px] border-[1px] bg-gray10">
          $0,00
        </div>
      </div>
    </div>
  )
}

export default ExportDataCard
