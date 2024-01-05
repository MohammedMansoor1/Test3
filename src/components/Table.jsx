import React from 'react'
import one from '@/assets/one.png'
import three from '@/assets/three.png'
import two from '@/assets/two.png'
import twoPic from '@/assets/twoPic.png'
import threePic from '@/assets/threePic.png'
import fourPic from '@/assets/fourPic.png'
import five from '@/assets/five.png'

function Table() {
  return (
    <>
      <div>
        <table className='w-[80%] ml-28 mt-8 h-auto font-dmSans text-start'>
          <thead className='h-12'>
            <th>Student</th>
            <th>Status</th>
            <th>Course</th>
            <th>Progress</th>
            <th>Rating</th>
          </thead>
          
          <tbody className='text-start font-dmSansFour'>
            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={one} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Guy Hawkins</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px]'>Enrolled</span></td>
              <td>UI Master Class</td>
              <td className='font-extrabold text-[24px]'>75%</td>
              <td><img className='ml-[14rem] ' src={three} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={twoPic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Devon Lane</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightYellow border-lightYellow p-1 rounded-[20px] '>Pending</span></td>
              <td>Backend Development</td>
              <td className='font-extrabold text-[24px]'>50%</td>
              <td><img className='ml-[14rem] ' src={two} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={threePic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Darlene Robertson</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px] '>Enrolled</span></td>
              <td>Frontend Development</td>
              <td className='font-extrabold text-[24px]'>25%</td>
              <td><img className='ml-[14rem] ' src={five} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={fourPic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Eleanor Pena</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px] '>Enrolled</span></td>
              <td>Data Science</td>
              <td className='font-extrabold text-[24px]'>100%</td>
              <td><img className='ml-[14rem] ' src={three} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={threePic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Darlene Robertson</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px] '>Enrolled</span></td>
              <td>Frontend Development</td>
              <td className='font-extrabold text-[24px]'>25%</td>
              <td><img className='ml-[14rem] ' src={five} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={threePic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Darlene Robertson</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px] '>Enrolled</span></td>
              <td>Frontend Development</td>
              <td className='font-extrabold text-[24px]'>25%</td>
              <td><img className='ml-[14rem] ' src={five} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={fourPic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Eleanor Pena</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px] '>Enrolled</span></td>
              <td>Data Science</td>
              <td className='font-extrabold text-[24px]'>100%</td>
              <td><img className='ml-[14rem] ' src={three} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={fourPic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Eleanor Pena</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px] '>Enrolled</span></td>
              <td>Data Science</td>
              <td className='font-extrabold text-[24px]'>100%</td>
              <td><img className='ml-[14rem] ' src={three} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={twoPic} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Devon Lane</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightYellow border-lightYellow p-1 rounded-[20px] '>Pending</span></td>
              <td>Backend Development</td>
              <td className='font-extrabold text-[24px]'>50%</td>
              <td><img className='ml-[14rem] ' src={two} alt="" /></td>
            </tr>

            <tr className='border-t-2 border-b-2 h-20 border-grayShade'>
              <td className='flex justify-center'>
                <img className='mt-4' src={one} alt="" />
                <div className='mt-4'>
                  <span className='ml-4 font-bold text-[14px]'>Guy Hawkins</span><br />
                  <span className='ml-4 text-lightGray'>I neglected to mention that I...</span>
                </div>
              </td>
              <td><span className='border bg-lightGreen border-lightGreen p-1 rounded-[20px] '>Enrolled</span></td>
              <td>UI Master Class</td>
              <td className='font-extrabold text-[24px]'>75%</td>
              <td><img className='ml-[14rem] ' src={three} alt="" /></td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table