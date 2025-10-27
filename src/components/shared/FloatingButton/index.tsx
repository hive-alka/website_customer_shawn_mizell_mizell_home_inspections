'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'

const FloatingButton = () => {
  return (
    <Link
      href="/contactus"
      className="fixed bottom-8 right-8 z-50 bg-primary text-white px-6 py-4 rounded-full shadow-2xl hover:bg-dark transition-all duration-300 flex items-center gap-3 group"
      aria-label="Schedule your inspection"
    >
      <Icon icon="mdi:calendar-check" width={24} height={24} className="group-hover:scale-110 transition-transform" />
      <span className="font-semibold text-base">Schedule Now</span>
    </Link>
  )
}

export default FloatingButton
