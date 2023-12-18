import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { RxSlash } from 'react-icons/rx'
import {
  Bars3Icon,
  EnvelopeIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import Drowpdown from '../drowpDowns/Drowpdown'
import Banner from '../banner/Banner'

const pages = [
  { name: 'Mailbox', href: '#', current: false, icon: <EnvelopeIcon /> },
  { name: 'Miami', href: '#', current: true, icon: <FolderOpenIcon /> },
]

function TopBar({ setSidebarOpen, userNavigation, classNames }) {
  return (
    <>
      <div className="sticky top-0 z-40 flex h-[64px] shrink-0 items-center gap-x-4 border-b border-gray-200 bg-[#eff5f6] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        {/* Separator */}
        <div className="flex flex-1 justify-between gap-x-4 lg:gap-x-6">
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            {/* badcrumbs */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center ">
                {pages.map((page) => (
                  <li key={page.name}>
                    <div className="flex items-center">
                      {page.current && (
                        <span className="ml-2 text-gray-400">
                          <RxSlash />
                        </span>
                      )}

                      <Link
                        to={page.href}
                        className="ml-2 text-[12px] font-[400] font-outfit flex items-center gap-1 text-gray-500 hover:text-gray-700"
                        aria-current={page.current ? 'page' : undefined}
                      >
                        <span className="w-[12px]"> {page.icon}</span>
                        <span>{page.name}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
            {/* drowpdown  */}
          </div>
          <Drowpdown
            classNames={classNames}
            className="inline-flex w-[129px] h-[32px] justify-between items-center rounded-md bg-white px-3 py-2 text-darkGray100 border border-gray-400 hover:bg-gray-50"
            label="Miami"
          />
        </div>
      </div>
    </>
  )
}

export default TopBar
