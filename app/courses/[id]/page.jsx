"use client"

import CourseContent from '../../../components/CourseContent'
import { BadgeCheck, Clock, Languages, NotebookPen, Puzzle, ShieldCheck, TriangleRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState,useEffect } from 'react'

function CourseDetails({params}) {
  
  const [isLoading, setLoading] = useState(true)

  const id = params.id
 
  useEffect(() => {
    fetch(`/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data.post)
        setLoading(false)
      })
  }, [id])
  const [course, setCourse] = useState([])
  // console.log(course.topics);
  // console.log(courses[1].topics[1].content[1]);
  

  return (
    <section>
      <div >
        <div className='pt-5 pb-5 justify-evenly md:flex px-7'>
          <div className='md:w-1/2'>
            <Image
              src={course.img}
              width={500}
              height={500}
              alt="Picture of the author"/>
              <h1 className='text-2xl font-bold md:4xl lg:text-3xl'>{course.name}</h1>
              <p className='pt-4'>{course.description}</p>
          </div>

          <div className='px-8 pt-3 md:border-l-2 md:w-1/2 md:pt-0'>
              <h1 className='pb-3 text-2xl font-bold'>Course Features</h1>
              <div className='pt-2'>
                <div>
                  <div className='flex justify-between pb-2'>
                  
                    <p><NotebookPen className='inline-block mr-1 text-blue-800' />Lectures</p>
                    <p>22</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between pb-2'>
                    <p><Puzzle className='inline-block mr-1 text-blue-800' />Quizzes</p>
                    <p>1</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between pb-2'>
                    <p><Clock className='inline-block mr-1 text-blue-800' />Duration</p>
                    <p>1</p>
                  </div>
                </div>
                
                <div>
                  <div className='flex justify-between pb-2'>
                    <p> <TriangleRight className='inline-block mr-1 text-blue-800' />Skill level</p>
                    <p>All levels</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between pb-2'>
                    <p> <Languages className='inline-block mr-1 text-blue-800' />Language</p>
                    <p>English</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between pb-2'>
                    <p><ShieldCheck className='inline-block mr-1 text-blue-800' />Certificate</p>
                    <p>Yes</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between pb-2'>
                    <p> <BadgeCheck className='inline-block mr-1 text-blue-800' />Assessments</p>
                    <p>Self</p>
                  </div>
                </div>
                
              </div>
          </div>
        </div>
        {
          course.topics?.map((topic,i)=>(
            <div key={i}>
              <CourseContent title={topic.name} content={topic.content}/>
            </div>
            
              // topic.content?.map((content,i)=>(
              //       <p key={i}>{content}22</p>
              // ))
          ))
        }
        

      </div>
    </section>
  )
}

export default CourseDetails
