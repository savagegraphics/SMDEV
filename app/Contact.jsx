import Link from 'next/link'
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('meqywyvv')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    details: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='bg-gray-100 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='max-w-2xl mt-12 lg:max-w-5xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-800 sm:text-4xl'>
            Contact us
          </h1>
          <p className='mt-1 text-gray-600'>
            We&apos;d love to talk about how we can help you.
          </p>
        </div>

        <div className='mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16'>
          <div className='flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8'>
            <h2 className='mb-8 text-xl font-semibold text-gray-800'>
              Fill in the form
            </h2>
            <form
              action='https://formspree.io/f/meqywyvv'
              method='POST'
              onSubmit={handleSubmit}
            >
              <div className='grid gap-4'>
                <div className='grid grid-cols-2 sm:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor='firstName' className='sr-only'>
                      First Name
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      id='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
                      placeholder='First Name'
                    />
                  </div>

                  <div>
                    <label htmlFor='lastName' className='sr-only'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      value={formData.lastName}
                      onChange={handleChange}
                      className='py-3 px-4 block w-full border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
                      placeholder='Last Name'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
                    placeholder='Email'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor='phoneNumber' className='sr-only'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
                    placeholder='Phone Number'
                  />
                </div>

                <div>
                  <label htmlFor='details' className='sr-only'>
                    Details
                  </label>
                  <textarea
                    id='details'
                    name='details'
                    rows='4'
                    value={formData.details}
                    onChange={handleChange}
                    className='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
                    placeholder='Details'
                  ></textarea>
                  <ValidationError
                    prefix='Message'
                    field='details'
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className='mt-4 grid'>
                <button
                  type='submit'
                  disabled={state.submitting}
                  className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                >
                  Send inquiry
                </button>
              </div>

              {state.succeeded && (
                <div className='mt-3 text-center'>
                  <p className='text-sm text-gray-500'>
                    Thanks for contacting us! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <div className='mt-3 text-center'>
                <p className='text-sm text-gray-500'>
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>

          <div className='divide-y divide-gray-200'>
            <div className='flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 size-6 mt-1.5 text-gray-800'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
                <path d='M12 17h.01' />
              </svg>
              <div className='grow'>
                <h3 className='font-semibold text-gray-800'>Name</h3>
                <p className='mt-1 text-lg text-gray-600'>Elebute Semiu</p>
              </div>
            </div>

            <div className='flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 size-6 mt-1.5 text-gray-800'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z' />
                <path d='M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1' />
              </svg>
              <div className='grow'>
                <h3 className='font-semibold text-gray-800'>Address</h3>
                <p className='mt-1 text-lg text-gray-600'>Lagos, Nigeria</p>
              </div>
            </div>

            <div className=' flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 size-6 mt-1.5 text-gray-800'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m7 11 2-2-2-2' />
                <path d='M11 13h4' />
                <rect width='18' height='18' x='3' y='3' rx='2' ry='2' />
              </svg>
              <div className='grow'>
                <h3 className='font-semibold text-gray-800'>GitHub profile</h3>
                <Link
                  href='https://github.com/ElebuteSemiu'
                  className='mt-1 text-lg text-gray-600'
                >
                  Click Check out my Github Profile.
                </Link>
              </div>
            </div>
            <div className=' flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 size-6 mt-1.5 text-gray-800'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z' />
                <path d='m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10' />
              </svg>
              <div className='grow'>
                <h3 className='font-semibold text-gray-800'>
                  Contact us by email
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  If you wish to write us an email instead please use
                </p>
                <a
                  className='mt-2 inline-flex items-center gap-x-2 text-lg font-medium text-blue-400 hover:text-gray-800'
                  href='#'
                >
                  elebutesemiu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
