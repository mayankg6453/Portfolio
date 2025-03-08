import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t boder-black-300 flex justify-between itemm-center flex-wrap'>
            <div className='text-white-500 flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Terms & Conditions</p>
            </div>
            <div className='flex gap-3'>
                <div className='social-icon'>
                    <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
                </div>
                <div className='social-icon'>
                    <img src="/assets/twitter.svg" alt="github" className='w-1/2 h-1/2'/>
                </div>
                <div className='social-icon'>
                    <img src="/assets/instagram.svg" alt="github" className='w-1/2 h-1/2'/>
                </div>
            </div>
            <p className='text-white-500'>© 2025 Mayank All rights reserved</p>
        </section>
  )
}

export default Footer