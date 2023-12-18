import React from 'react'
import Drowpdown from '../drowpDowns/Drowpdown'

const eventData = [
  {
    name: 'All Maills',
    notifaction: 240,
    current: true,
    noti: true,
  },
  {
    name: 'Scan',
    notifaction: 250,
    current: false,
    noti: true,
  },
  {
    name: 'Farward',
    notifaction: 354,
    current: false,
    noti: true,
  },
  {
    name: 'Shred',
    notifaction: '1564',
    current: false,
    noti: true,
  },
  {
    name: 'Piked Up',
    notifaction: 10,
    current: false,
    noti: true,
  },
  {
    name: 'Junk',
    notifaction: 226,
    current: false,
    noti: true,
  },
  {
    name: 'Deposts',
    notifaction: 12,
    current: false,
    noti: true,
  },
  {
    name: 'Setting',
    notifaction: '',
    current: false,
    noti: false,
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const AddEvents = () => {
  return (
    <div className="lg:h-[185px] rounded-[8px] border-[1px] border-[#D0DEE1] py-[24px] justify-center flex-col flex items-center gap-[30px] my-7">
      <div className="md:h-[50px] w-full border-b-[1px]  border-[#D0DEE1]  pr-[24px] pl-[24px] pb-[24px] gap-5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center flex-wrap md:h-[20px] gap-[24px]">
          {eventData?.map((val, idx) => (
            <div key={idx} className="flex items-center gap-[8px] font-outfit">
              <p
                className={`text-[16px] leading-[20.3px] font-[500]' ${
                  val.current ? ' text-gray100' : 'text-[#b4bbc2]'
                }`}
              >
                {val.name}
              </p>
              {val.noti && (
                <small
                  className={`w-[26px] h-[16px] rounded-[3px] text-white ${
                    val.current ? 'bg-[#4cbbcb]' : 'bg-[#b4bbc2]'
                  }  px-[10px] py-[2px] text-[8px] flex items-center justify-center`}
                >
                  <span className="w-[9px] h-[9px]">{val.notifaction}</span>
                </small>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[8px] h-[63px] py-[24px]">
          <button className="w-[87px] h-[26px] rounded-[4px] p-[12px] bg-customBlue100 text-white border-0 outline-0 font-outfit text-[12px] leading-[14.4px] flex justify-center items-center">
            Add Mail
          </button>
          <button className="w-[87px] h-[26px] rounded-[4px] p-[12px] bg-customBlue100 text-white border-0 outline-0 font-outfit text-[12px] leading-[14.4px] flex justify-center items-center ">
            Add Bulk
          </button>
        </div>
      </div>
      <div className="px-[24px] w-full flex flex-col lg:flex-row items-center justify-between gap-[16px]">
        <div className="flex flex-col gap-[5px] w-full items-start">
          <small className="text-[#99a1ab]">Events</small>
          <Drowpdown
            className="inline-flex w-[310px] md:w-[360.33px] h-[32px] justify-between items-center rounded-md bg-white px-3 py-2 text-darkGray100 border border-[#D0DEE1] hover:bg-gray-50"
            label="Events"
            classNames={classNames}
          />
        </div>
        <div className="flex flex-col w-full gap-[5px] items-start font-outfit">
          <small className="text-[#99a1ab]">From</small>
          <input
            type="date"
            className="w-full h-[32px] rounded-md bg-white px-3 py-2 text-darkGray100 border border-[#D0DEE1] outline-0 "
          />
        </div>
        <div className="flex flex-col w-full gap-[5px] items-start font-outfit">
          <small className="text-[#99a1ab]">To</small>
          <input
            type="date"
            className="w-full h-[32px] rounded-md bg-white px-3 py-2 text-darkGray100 border border-[#D0DEE1] outline-0 "
            placeholder="date"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default AddEvents
