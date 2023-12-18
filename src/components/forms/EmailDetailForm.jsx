import React from 'react'
import FedEx from '../../assets/FedEx.png'
function EmailDetailForm() {
  return (
    <div className="flex flex-col gap-[48px]">
      <div className="w-[548px] h-[170px]">
        <div className=" flex flex-col gap-[16px] h-[95px]">
          <label
            htmlFor="location"
            className="block text-[24px] leading-[30.24px] font-[500] text-darkGray100"
          >
            Carrier
          </label>
          <select
            id="location"
            name="location"
            className="flex h-[41px] rounded-[4px] p-[12px] font-[400] text-[14px] leading-[16.8px] text-[#D8DBE3] border-tableHeaderBg border-[1px] focus:ring-0 focus:ring-offset-0 focus:border-tableHeaderBg "
            defaultValue="Canada"
          >
            <option className="">
              <img className="h-12 w-12" src={FedEx} alt="fedEx logo" />
              FedEx
            </option>
          </select>
        </div>
        <div className="h-[59px] flex flex-col gap-[4px]">
          <div className="h-[14px] text-[12px] leading-[14.3px] text-gray70">
            Label Format
          </div>
          <div className="flex justify-between gap-[16px] h-[41px]">
            <div className="flex justify-between align-middle w-[266px] bg-customBlue20 border-customBlue100 border-[1px] rounded-[4px] p-[12px]">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-[16px] w-[16px] rounded text-customBlue100  border-customBlue100 border-[2px] focus:ring-0 focus:ring-offset-0"
              />
              <span className="font-outfit font-[400] text-[12px] text-darkGray100">
                8.5 x 11
              </span>
            </div>
            <div className="flex justify-between align-middle w-[266px] border-customBlue100 border-[1px] rounded-[4px] p-[12px]">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-[16px] w-[16px] rounded text-customBlue100  border-customBlue100 border-[2px] focus:ring-0 focus:ring-offset-0"
              />
              <span className="font-outfit font-[400] text-[12px] text-darkGray100">
                4 x 6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] w-[548px] h-[263px]">
        <div className=" flex flex-col gap-[16px] h-[30px]">
          <label
            htmlFor="location"
            className="block text-[24px] leading-[30.24px] font-[500] text-darkGray100"
          >
            Packaging
          </label>
        </div>
        <div className="h-[59px] flex flex-col gap-[4px]">
          <div className="h-[14px] text-[12px] leading-[14.3px] text-gray70">
            Label Format
          </div>
          <div className="flex  justify-between gap-[16px] h-[41px]">
            <div className="flex justify-between  w-[266px] bg-customBlue20 border-customBlue100 border-[1px] rounded-[4px] p-[12px]">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-[16px] w-[16px] rounded text-customBlue100  border-customBlue100 border-[2px] focus:ring-0 focus:ring-offset-0"
              />
              <span className="font-outfit font-[400] text-[12px] text-darkGray100">
                Predefined Package
              </span>
            </div>
            <div className="flex justify-between  w-[266px] border-customBlue100 border-[1px] rounded-[4px] p-[12px]">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-[16px] w-[16px] rounded text-customBlue100  border-customBlue100 border-[2px] focus:ring-0 focus:ring-offset-0"
              />
              <span className="font-outfit font-[400] text-[12px] text-darkGray100">
                Custom
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px] w-[548px]">
          <div className="h-[14px] text-[12px] leading-[14.3px] text-gray70">
            Package
          </div>
          <select
            id="location"
            name="location"
            className="flex h-[41px] w-[548px] rounded-[4px] p-[12px] text-[14px] font-[400] font-outfit text-darkGray100 leading-[16.8px]  border-tableHeaderBg border-[1px] focus:ring-0 focus:ring-offset-0 focus:border-tableHeaderBg "
            defaultValue="Canada"
          >
            <option className="">Envelope</option>
          </select>
        </div>
        <div className="w-[548px] flex flex-col gap-[4px]">
          <div className="h-[14px] text-[12px] leading-[14.3px] text-gray70">
            Weight
          </div>
          <select
            id="location"
            name="location"
            className="flex h-[41px] w-[548px] rounded-[4px] p-[12px] text-[14px] font-[400] font-outfit text-darkGray100 leading-[16.8px]   border-tableHeaderBg border-[1px] focus:ring-0 focus:ring-offset-0  focus:border-tableHeaderBg"
            defaultValue="Canada"
          >
            <option className="text-[14px] font-[400] font-outfit text-darkGray100">
              Ounces
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] w-[548px] h-[185px]">
        <div className="h-[30px]">
          <label
            htmlFor="location"
            className="block text-[24px] leading-[30.24px] font-[500] text-darkGray100"
          >
            Packaging
          </label>
        </div>
        <select
          id="location"
          name="location"
          className="flex h-[41px] w-[548px] rounded-[4px] p-[12px] text-[14px] font-[400] font-outfit text-darkGray100 leading-[14.8px]   border-tableHeaderBg border-[1px] focus:ring-0 focus:ring-offset-0 focus:border-tableHeaderBg"
          defaultValue="Canada"
        >
          <option className="text-[14px] font-[400] font-outfit text-darkGray100">
            Shipping prepared name
          </option>
        </select>
        <div className="flex flex-col justify-between gap-[16px] h-[74px]">
          <div className=" h-[17px] w-[548px] font-outfit font-[400] text-[12px] text-darkGray100">
            If your parcel cannot be delivered please select one of the
            following options:
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between  w-[266px] bg-customBlue20 border-customBlue100 border-[1px] rounded-[4px] p-[12px]">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-[16px] w-[16px] rounded text-customBlue100  border-customBlue100 border-[2px] focus:ring-0 focus:ring-offset-0"
              />
              <span className="font-outfit font-[400] text-[12px] text-darkGray100">
                Return to parcel (at my expense)
              </span>
            </div>
            <div className="flex justify-between  w-[266px] border-customBlue100 border-[1px] rounded-[4px] p-[12px]">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-[16px] w-[16px] rounded text-customBlue100  border-customBlue100 border-[2px] focus:ring-0 focus:ring-offset-0"
              />
              <span className="font-outfit font-[400] text-[12px] text-darkGray100">
                Abandon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailDetailForm
