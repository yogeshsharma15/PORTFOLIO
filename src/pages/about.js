import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profile-photo.jpeg"
import Skills from '@/components/Skills'
import { Education } from '@/components/Education'

export const about = () => {
  return (
    <>
      <Head>
        <title>YogeshSharma | About Page</title>
        <meta name='description' content="Any topic"></meta>
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion that builds excellence." className='mb-16' /> 
          {/* Container for side-by-side layout */}
          <div className='flex w-full items-center justify-between'>
            
            {/* About Me Section */}
            <div className='flex-1 mr-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
              <p className='font-medium'>
                As a dedicated and innovative B.Tech student specializing in
                Computer Science and Engineering with a focus on Artificial
                Intelligence and Machine Learning, I aim to leverage my full-stack
                MERN development skills to drive technological advancements.
              </p>
              <p className='my-4 font-medium'>
                Passionate about integrating AI and ML solutions, I seek to
                contribute to dynamic projects that challenge and expand my
                expertise. My commitment to continuous learning, coupled with
                my enthusiasm for football, music, and reading, fuels my creative
                problem-solving and teamwork abilities.
              </p>
              <p className='font-medium'>
                I aspire to join a forward-thinking organization where I can apply my knowledge and grow
                both professionally and personally. I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            {/* Image Section */}
            <div className='relative h-max w-1/4 rounded-2xl border-2 border-solid border-dark bg-light p-4'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image 
                src={profilePic} 
                alt="YogeshSharma" 
                className='w-full h-auto rounded-2xl'
                style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

            {/* Right-aligned text section with gaps */}
            <div className='flex flex-col items-end w-1/4 space-y-10'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-4xl font-bold'>Continuous</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Learner</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-4xl font-bold'>Intrinsic</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Motivated</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-4xl font-bold'>Well</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Organised</h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Education/>
        </Layout>
      </main>
    </>
  )
}

export default about
