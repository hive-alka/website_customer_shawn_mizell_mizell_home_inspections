'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavLink from './Navigation/NavLink'
import Image from 'next/image'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  return (
    <header className={`fixed z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 ${sticky ? "h-14 sm:h-16 py-1 top-3" : "h-20 sm:h-24 py-1 top-0"}`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between duration-300 ${sticky ? "py-2 shadow-lg bg-white rounded-full top-5 px-4" : "py-4 shadow-none top-0"}`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div className="flex items-center gap-8">
            <Link href='/'>
              <Image
                src={'/images/header/logo.png'}
                alt='Mizell Home Inspection'
                width={sticky ? 70 : 120}
                height={sticky ? 35 : 60}
                
                className="object-contain transition-all duration-300 sm:w-auto"
                style={{ width: sticky ? '70px' : '120px', maxWidth: sticky ? '80px' : '150px' }}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {mounted && navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-base font-medium transition-colors duration-300 text-dark hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex items-center gap-2 sm:gap-6'>
            <Link href='tel:352-652-0259' className="flex items-center gap-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 text-dark hover:bg-primary/10 hover:text-primary min-h-[44px]"
            >
              <Icon icon={'ph:phone-bold'} width={20} height={20} className="sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg font-medium hidden md:inline">352-652-0259</span>
            </Link>

            <div className="hidden sm:block">
              <Link href='/contactus' className="text-sm sm:text-base lg:text-lg font-bold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-xl hover:scale-105 transform bg-primary text-white hover:bg-primary/90 hover:shadow-2xl"
              >
                <span className="hidden lg:inline">Schedule Inspection</span>
                <span className="lg:hidden">Schedule</span>
              </Link>
            </div>
            
            <div className="block lg:hidden">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border bg-dark text-white hover:bg-transparent hover:text-dark border-dark duration-300 min-h-[44px] min-w-[44px]"
                aria-label='Toggle mobile menu'>
                <span>
                  <Icon icon={'ph:list'} width={24} height={24} />
                </span>
                <span className='hidden sm:block'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {
        navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )
      }

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-full bg-dark shadow-lg transition-transform duration-300 sm:max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50 px-5 sm:px-8 md:px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-10'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-3 rounded-full hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className='flex flex-col items-start gap-4'>
              <ul className='w-full'>
                {navLinks.map((item, index) => (
                  <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-1 my-16 text-white'>
            <p className='text-base sm:text-xm font-normal text-white/40'>
              Contact
            </p>
            <Link href="mailto:shawn@mizellhomeinspections.com" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
              shawn@mizellhomeinspections.com
            </Link>
            <Link href="tel:352-652-0259" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
              352-652-0259{' '}
            </Link>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
