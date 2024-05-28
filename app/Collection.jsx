import React from 'react'

const Collection = () => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            Collections of Projects
          </h2>

          <p className='mx-auto max-w-screen-lg text-left text-gray-500 md:text-lg'>
            Welcome to my portfolio! Here, you'll find projects showcasing my
            skills as a MERN stack frontend developer. These projects
            demonstrate my ability to build dynamic, responsive web applications
            using MongoDB, Express.js, React, and Node.js.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2'>
          <a
            href='#'
            className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
          >
            <img
              src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D'
              loading='lazy'
              alt='Photo by Fakurian Design'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <div className='relative flex flex-col'>
              <span className='text-gray-300'>Project</span>
              <span className='text-lg font-semibold text-white lg:text-xl'>
                Blog Website
              </span>
            </div>
          </a>

          <a
            href='#'
            className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
          >
            <img
              src='https://media.istockphoto.com/id/1214509167/photo/woman-doing-shopping-online-with-digital-tablet.webp?b=1&s=170667a&w=0&k=20&c=oGEYEBBstTkHkP0GQKOjMPOatmIlCXSXv6HAOAVhX-Y='
              loading='lazy'
              alt='Photo by Fakurian Design'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <div className='relative flex flex-col'>
              <span className='text-gray-300'>Project</span>
              <span className='text-lg font-semibold text-white lg:text-xl'>
                E-Commerce Website
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Collection
