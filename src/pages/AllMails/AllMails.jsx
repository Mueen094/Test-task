import React, { Fragment } from 'react'
import StorageCard from '../../components/storageCard/StorageCard'
import AddEvents from '../../components/addEvents/AddEvents'
import EmailTable from '../../components/emailTable/EmailTable'
import Banner from '../../components/banner/Banner'

const AllMails = () => {
  return (
    <Fragment>
      <div className="sticky top-0 flex shrink-0 items-center gap-x-4 border-b bg-[#f4f8f9] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 h-[57px]">
        <p className="font-outfit text-[20px] leading-[25.2px] text-darkGray100">
          Virtual Mailbox-Miami
        </p>
      </div>
      <div className=" sm:p-[20px] md:p-[40px] p-[14px]">
        <StorageCard />
        <AddEvents />
        <EmailTable />
      </div>
    </Fragment>
  )
}

export default AllMails
