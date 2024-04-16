"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'


function Courses() {
  const [courses, setCourses] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses)
        setLoading(false)

      })
  }, [])
  // console.log("THE DATA ISSSSs",JSON.stringify(courses));

  return (
    <div className=''>
      <div className='flex flex-col text-center p-4'>
        <h1 className='text-3xl font-bold'> Our Courses</h1>
        <p className='text-xl'>Unlock Your Potential with Our Online Programs</p>
      </div>
      {/*  */}
      
         < div className='m-12'>

          <div className='grid md:grid-col-3 sm:grid-cols-2 mt-12 gap-8'>
            <div className=' flex items-center flex-col gap-4 bg-blue-100 p-8 rounded-md '>
              <h1 className='font-bold text-2xl'>Emerging Technology</h1>
              <p>Blockchain is a rapidly evolving technology with potential applications across various industries.</p>
              <ul className='list-disc' >
                <li>finance  </li>
                <li>healthcare</li>
                <li>supply chain management</li>
              </ul>
            </div>

            {/*******************************************************************************/}
            <div className=' flex items-center flex-col gap-4 bg-blue-100 p-8 rounded-md'>
              <h1 className='font-bold text-2xl'>Career Opportunities</h1>
              <p>Understanding blockchain technology can inspire and find entrepreneurial ventures.</p>
              <ul className='list-disc'>
                <li>Blockchain-based business models.</li>
                <li>Develop decentralized applications.</li>
                <li>Launch blockchain startups.</li>
              </ul>
            </div>


            <div className=' flex items-center flex-col gap-4 bg-blue-100 p-8 rounded-md'>
              <h1 className='font-bold text-2xl'>Investment and Trading</h1>
              <p>Understanding blockchain technology can help investors make informed decisions and navigate
                the complexities of the cryptocurrency ecosystem.</p>
              <ul className='list-disc'>
                <li>Investment strategies.</li>
                <li>Trading techniques</li>
                <li>cryptocurrency markets</li>
              </ul>
            </div>


            <div className=' flex items-center flex-col gap-4 bg-blue-100 p-8 rounded-md'>
              <h1 className='font-bold text-2xl'>Global Impact</h1>
              <p>Blockchain technology has the potential to address global challenges
                and allows individuals to contribute to social impact initiatives
                and explore the technologies.</p>
              <ul className='list-disc'>
                <li>Financial inclusion.</li>
                <li>identity management</li>
                <li>Supply chain transparency.</li>


              </ul>
            </div>


          </div>
     
          </div>
      {/*  */}
      <div className='grid justify-between gap-10 px-15 py-4 md:grid-cols-2 lg:grid-cols-2'>

        {courses.map((c) => (
          <Link key={c.id} href={`/courses/${c.id}`} className='border m-auto rounded-lg transform transition duration-500 hover:scale-105 md:hover:scale-110'>
            <div>
              <Image
                className='rounded-lg p-4'
                src={c.img}
                width={500}
                height={500}
                alt="Picture of the author" />
              <div className='p-4'>
                <h1 className='pt-3 text-2xl font-semibold'>{c.name}</h1>
                <p>62 modules</p>

              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Courses


