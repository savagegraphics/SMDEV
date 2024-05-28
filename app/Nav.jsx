'use client'
import React, { useState, useEffect } from 'react'
import Card from './Card'
import About from './About'
import FeatureCard from './FeatureCard'
import Contact from './Contact'
import Footer from './Footer'
import FAQ from './FAQ'
import Collection from './Collection'
import Skill from './Skill'

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/' },
    { title: 'Services', path: '/' },
    { title: 'Skills', path: '/' },
    { title: 'Contact', path: '/' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.onclick = e => {
      const target = e.target
      if (!target.closest('.menu-btn')) setMenuOpen(false)
    }
  }, [])

  const Brand = () => (
    <div className='flex items-center justify-between py-5 md:block mx-4'>
      <a href='/' className='text-xl text-white font-semibold'>
        <p>
          Semiu<span className='text-blue-500'>Tech.</span>
        </p>
      </a>
      <div className='md:hidden'>
        <button
          className='menu-btn text-gray-400 hover:text-gray-300'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  )

  return (
    <div className=''>
      <header
        className={`fixed top-0 left-0 bg-gray-800 w-w-full lg:w-full h-20 z-999 transition-colors duration-300 ${
          scrolled ? 'bg-gray-800' : 'bg-transparent'
        }`}
      >
        <div className={`md:hidden ${menuOpen ? 'mx-2 pb-5' : 'hidden'}`}>
          <Brand />
        </div>
        <nav
          className={`pb-5 md:text-sm bg-gray-800 ${
            menuOpen
              ? 'absolute z-999 top-0 inset-x-0 bg-gray-800 rounded-xl mx-8 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent'
              : ''
          }`}
        >
          <div className='gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8'>
            <Brand />
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                menuOpen ? 'block' : 'hidden'
              } `}
            >
              <ul className='flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
                {navigation.map((item, idx) => (
                  <li key={idx} className='text-gray-300 hover:text-gray-400'>
                    <a href={item.path} className='block'>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className='pt-16 bg-[#2d383c96] h-[100vh]'>
        <Card />
        <About />
        <Skill />
        <FeatureCard />
        <Collection />
        <FAQ />
        <Contact />
        <Footer />
        {/* Add padding to compensate for the fixed navbar */}
        {/* Your page content here */}
      </div>
    </div>
  )
}
