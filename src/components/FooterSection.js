import React from 'react'
import logo2 from './Assets/logo2.png'
import insta from './Assets/instagram.png'
import twitter from './Assets/twitter.png'
import youtube from './Assets/youtube.png'
import facebook from './Assets/facebook.png'
import message from './Assets/message.png'

function FooterSection() {
  return (
    <div className="w-full h-auto p-10 mt-[30px] flex justify-center bg-zinc-800 help-section">
      <div className=' w-[70%] h-[600px] flex flex-col'>
        <div className=" flex justify-between items-center">
            <img className='w-[150px]' src={logo2} />
            <button className="text-white py-2 px-6 bg-blue-500 rounded-lg border-[2px] border-white">Schedule 1-on-1 Call Now</button>
        </div>

        <div className=" flex justify-between w-[100%]  mt-[50px] text-white">
            <div className='flex flex-col gap-1 text-[15px]'>
                <h5 className=' mb-[30px]'>Programs</h5>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Data Science & Ai</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Product management</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Business Analytics</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Digital Transformation</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Business Management</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Project Management</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Strategy & Leadership</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
                <div className='flex gap-5 w-[250px] items-center justify-between font-bold'>
                    <h6>Fintech</h6>
                    <h1 className='text-[30px]'>+</h1>
                </div>
            </div>
            <div className='px-20'>
                <h5 className=' mb-[30px]'>Contact Us</h5>
                <p className=' text-[13px]'>
                    Email us (for Data Science queries): admissions@accredians.com Email us (For Product Management Queries): pm@accredian.com Data Science Admissions Helpline: +91 9079653292 (9 AM - 7 PM) Product management admissions Helpline: +91 9625811095 Office Address: 4th Floor, 250, phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 1221015 <br />
                    <h4 className='text-[15px] my-3 font-bold'>Why Accredian</h4>
                    <h4 className=" text-gray-500 my-3 text-[15px]">Follow Us</h4>
                    <div className='flex gap-4'>
                        <img src={insta} />
                        <img src={facebook} />
                        <img src={twitter} />
                        <img src={youtube} />
                        <img src={message} />
                    </div>
                </p>
            </div>
            <div className=''>
                <h5 className=' mb-[30px]'>Accredian</h5>
                <div className=' text-[13px] flex flex-col'>
                    <h4>About</h4>
                    <h4>Carrer</h4>
                    <h4>Blog</h4>
                    <h4>Admission Policy</h4>
                    <h4>Refreeal Policy</h4>
                    <h4>Privacy Policy</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSection
