import { useLayoutEffect, useRef, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { LuImagePlus } from 'react-icons/lu'
import { AiOutlineScan } from 'react-icons/ai'
import { PiShareFatFill } from 'react-icons/pi'
import { BiSolidEditAlt } from 'react-icons/bi'
import { IoIosCut } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { TbMailFilled } from 'react-icons/tb'
import { RiChatDownloadFill } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'

const people = [
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },
  {
    id: 3231242,
    mailbox: 4980,
    sender: 'US Citizenship',
    date: 'March 6, 2028',
    type: 'Letter',
    qyt: 10,
    status: 'New',
  },

  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState([])
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className=" mt-10">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className=" h-[40px] w-full border">
                  <tr className=" font-outfit h-[40px] text-[12px]">
                    <th
                      scope="col"
                      className="relative border-r px-7 sm:w-12 sm:px-6"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab] my-[10px] font-[500] leading-[24px] border-r w-[100px]  text-left p-[12px]"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab] font-[500] leading-[24px] border-r w-[105px] text-left p-[12px]"
                    >
                      MAILBOX#
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab] my-[10px] font-[500] leading-[24px] border-r  w-[144px] text-left p-[12px]"
                    >
                      SENDER
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab]  font-[500] leading-[24px] border-r  w-[144px] text-left p-[12px] "
                    >
                      DATE
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab] my-[10px] font-[500] leading-[24px] border-r  w-[144px] text-left p-[12px] "
                    >
                      TYPE
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab] font-[500] leading-[24px] border-r  w-[144px] text-left p-[12px] "
                    >
                      QYT
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab] my-[10px] font-[500] leading-[24px] border-r  w-[144px] text-left p-[12px] "
                    >
                      STATUS
                    </th>
                    <th
                      scope="col"
                      className="text-[#99a1ab] font-[500] leading-[24px] border-r  w-[328px] text-left p-[12px] "
                    >
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className=" bg-white ">
                  <>
                    {people.map((person) => (
                      <tr
                        key={person.email}
                        className=" bg-white hover:bg-[#dbf1f5] border-b-[1px] border-[#f6f7f8] w-full cursor-pointer duration-300 group"
                      >
                        <td className="relative px-7 sm:w-12 sm:px-6 ">
                          {selectedPeople.includes(person) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            value={person.email}
                            checked={selectedPeople.includes(person)}
                            onChange={(e) =>
                              setSelectedPeople(
                                e.target.checked
                                  ? [...selectedPeople, person]
                                  : selectedPeople.filter((p) => p !== person)
                              )
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-[#808a96] ">
                          {person.id}
                        </td>
                        <td className="whitespace-nowrap font-outfit px-3 py-4 text-sm text-[16px] font-[700] leading-[14px] text-gray100">
                          {person.mailbox}
                        </td>
                        <td className="whitespace-nowrap font-outfit px-3 py-4 text-sm text-[16px] font-[400] text-[#808a96]">
                          {person.sender}
                        </td>
                        <td className="whitespace-nowrap font-outfit px-3 py-4 text-sm text-[16px] font-[400] text-[#808a96]">
                          {person.date}
                        </td>
                        <td className="whitespace-nowrap font-outfit px-3 py-4 text-sm text-[16px] font-[400] text-[#808a96]">
                          {person.type}
                        </td>
                        <td className="whitespace-nowrap font-outfit px-3 py-4 text-sm text-[16px] font-[400] text-[#808a96]">
                          {person.qyt}
                        </td>
                        <td className="whitespace-nowrap sm:pr-3">
                          <a
                            href="#"
                            className="w-[48px] h-[26px] px-[12px] py-[6px] text-[12px] font-[400] rounded-[4px] border-[1px] border-newBtnBorder bg-newBtnBg font-outfit"
                          >
                            {person.status}
                          </a>
                        </td>
                        <td className="whitespace-nowrap flex items-center gap-[10px] font-outfit px-[20px] py-[12px] text-[16px] font-[400] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="w-[16px] h-[16px] p-[4px] text-customBlue100">
                            <FaRegEdit />
                          </span>
                          <span className="w-[16px] h-[16px] p-[4px] text-customBlue100">
                            <LuImagePlus />
                          </span>
                          <span className="w-[16px] h-[16px] p-[4px] text-customBlue100">
                            <AiOutlineScan />
                          </span>

                          <span
                            onClick={() => navigate('/forwardMail')}
                            className="w-[16px] h-[16px] p-[4px] text-customBlue100"
                          >
                            <PiShareFatFill />
                          </span>

                          <span className="w-[16px] h-[16px] p-[4px] text-darkGray100">
                            <RiChatDownloadFill />
                          </span>
                          <span className="w-[16px] h-[16px] p-[4px] text-customBlue100">
                            <BiSolidEditAlt />
                          </span>
                          <span className="w-[16px] h-[16px] p-[4px] text-[#74c8d2]">
                            <IoIosCut />
                          </span>
                          <span className="w-[16px] h-[16px] p-[4px] text-[#74c8d2]">
                            <MdDelete />
                          </span>
                          <span className="w-[16px] h-[16px] p-[4px] text-[#74c8d2]">
                            <TbMailFilled />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
              <div className="h-[48px] w-full bg-[#fcfcfc] border-[0.78px] border-[#f6f7f8] flex items-center gap-3 px-4 text-[#808a96]">
                <button className=" font-outfit  text-[12px] font-[500]">
                  ADD NEW
                </button>
                <span className="w-8 h-8 flex items-center">
                  <FaPlus />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
