import React from 'react'

const Card = () => {
  return (
    <div className='pb-6 sm:pb-8 lg:pb-12 lg:h-[80vh] h-[68vh]'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <section className='flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row px-3'>
          <div className='flex flex-col justify-center sm:text-center lg:py-12 lg:px-24 lg:text-left xl:w-8/12 xl:py-24 py-24'>
            <p className='mb-3 font-semibold text-indigo-50 md:mb-4 md:text-lg xl:text-xl'>
              Hello, I&apos;m
            </p>

            <h1 className='mb-8 text-4xl font-bold text-white md:text-5xl md:mb-12 lg:text-6xl'>
              Semiu Elebute
            </h1>

            <p className='mb-8 leading-relaxed text-gray-200 text-lg md:mb-12 lg:w-4/5 xl:text-xl'>
              And I&apos;m A Software Developer
            </p>

            <div className='flex gap-2.5 flex-row sm:justify-center lg:justify-start'>
              <a
                href='#'
                className='inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'
              >
                Hire me
              </a>

              <a
                href='#'
                className='inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base'
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Card
