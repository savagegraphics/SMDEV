import React from 'react'

const FAQ = () => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto mt-12 max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            Frequently Asked Questions
          </h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            Here are some common questions I get asked as a developer
            specializing in JavaScript, React, and the MERN stack. If you have
            any other questions, feel free to reach out!
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:gap-8'>
          <div className='rounded-lg bg-gray-100 p-5'>
            <div className='mb-4 flex items-center justify-between gap-4 border-b pb-4'>
              <h3 className='font-semibold text-indigo-500 sm:text-lg md:text-xl'>
                What JavaScript frameworks do you use?
              </h3>
              <span className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </div>
            <p className='text-gray-500'>
              I primarily use React.js for building user interfaces. On the
              server side, I use Node.js with Express.js for handling backend
              logic.
            </p>
          </div>

          <div className='rounded-lg bg-gray-100 p-5'>
            <div className='mb-4 flex items-center justify-between gap-4 border-b pb-4'>
              <h3 className='font-semibold text-indigo-500 sm:text-lg md:text-xl'>
                What is the MERN stack?
              </h3>
              <span className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </div>
            <p className='text-gray-500'>
              The MERN stack is a web development stack consisting of MongoDB,
              Express.js, React.js, and Node.js. It allows for full-stack
              development using JavaScript for both the client and server sides.
            </p>
          </div>

          <div className='rounded-lg bg-gray-100 p-5'>
            <div className='mb-4 flex items-center justify-between gap-4 border-b pb-4'>
              <h3 className='font-semibold text-indigo-500 sm:text-lg md:text-xl'>
                Do you have experience with full-stack development?
              </h3>
              <span className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </div>
            <p className='text-gray-500'>
              Yes, I have extensive experience in full-stack development using
              the MERN stack. I handle everything from the database to
              server-side logic and client-side interfaces.
            </p>
          </div>

          <div className='rounded-lg bg-gray-100 p-5'>
            <div className='mb-4 flex items-center justify-between gap-4 border-b pb-4'>
              <h3 className='font-semibold text-indigo-500 sm:text-lg md:text-xl'>
                What tools do you use for version control and deployment?
              </h3>
              <span className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </div>
            <p className='text-gray-500'>
              I use Git for version control, typically hosted on GitHub. For
              deployment, I use platforms like Heroku, Vercel, and AWS,
              depending on the project requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
