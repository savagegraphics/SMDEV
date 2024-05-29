import React from 'react'

const About = () => {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto mt-16 max-w-screen-xl px-4 md:px-8'>
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

          <div className='md:pt-8 lg:mt-20'>
            <h2 className='mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left'>
              About Me
            </h2>

            <p className='mb-4 text-gray-500 sm:text-lg md:mb-8 p-4'>
              I&apos;m a tech enthusiast with a strong software development
              background, driven by a passion for innovation and
              problem-solving. I thrive on exploring cutting-edge fields and
              embracing emerging technologies, believing in their power to drive
              positive change. With a focus on creating meaningful
              contributions, I bring a blend of technical expertise and
              strategic thinking to every project. Let&apos;s collaborate and
              push boundaries together to shape the future through technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
