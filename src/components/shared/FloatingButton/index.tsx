'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'

const FloatingButton = () => {
  return (
    <Link
      href="/contactus"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-primary text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-2xl hover:bg-dark transition-all duration-300 flex items-center gap-2 sm:gap-3 group min-h-[44px]"
      aria-label="Schedule your inspection"
    >
      <Icon icon="mdi:calendar-check" width={20} height={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      <span className="font-semibold text-sm sm:text-base hidden xs:inline">Schedule Now</span>
      <span className="font-semibold text-sm xs:hidden">Book</span>
    </Link>
  )
}

export default FloatingButton
