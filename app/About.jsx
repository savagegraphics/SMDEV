import React from 'react'

const About = () => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2 lg:gap-12'>
          <div>
            <div className='h-[30rem] overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
              <img
                src='/User.jpg'
                loading='lazy'
                alt='Photo by Martin Sanchez'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>

          <div className='md:pt-8 lg:mt-36'>
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left'>
              About Me
            </h2>

            <p className='mb-6 text-gray-500 sm:text-lg md:mb-8'>
              I'm a fervent tech enthusiast with a talent for delving into
              cutting-edge fields and figuring out challenges issues. I have a
              solid background in Software development, but my true motivation
              is my passion to create and have a positive impact on the digital
              world and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
