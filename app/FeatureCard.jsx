import React from 'react'

const FeatureCard = () => {
  return (
    <section className='py-24 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto'>
          <div className='relative w-full text-center lg:text-left lg:w-2/4'>
            <h2 className='text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0'>
              Unlock the Power of MERN Stack Development
            </h2>
          </div>
          <div className='relative w-full text-center lg:text-left lg:w-2/4'>
            <p className='text-lg font-normal text-gray-500 mb-5'>
              Bringing top-notch web applications to life with MongoDB,
              Express.js, React, and Node.js.
            </p>
            <a
              href='#'
              className='flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700'
            >
              Discover My Work
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5'
                  stroke='#4F46E5'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className='flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8'>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20 10L15 15L10 10'
                  stroke='#4F46E5'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Backend Development
            </h4>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              Crafting scalable and secure backend solutions using Node.js and
              Express.js.
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 10L20 15L15 20L10 15L15 10Z'
                  stroke='#4F46E5'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Frontend Development
            </h4>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              Building dynamic and responsive user interfaces with React.js.
            </p>
          </div>
          <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600'>
            <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14'>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 10L20 20H10L15 10Z'
                  stroke='#4F46E5'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
              Database Management
            </h4>
            <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
              Managing and optimizing databases with MongoDB for seamless data
              flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureCard
