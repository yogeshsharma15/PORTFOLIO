import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/Automaticboardcleaner.jpg";
import project2 from "../../public/images/projects/Windows.jpg";
import project3 from "../../public/images/projects/virtualpainter1.jpg";
import project4 from "../../public/images/projects/todo1.jpg";
import project5 from "../../public/images/projects/Ecommerce.jpg";
import project6 from "../../public/images/projects/Seeds.jpg";

// Featured Project Component
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 hover:border-primary transition-all duration-300'>
      <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto'/>
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

// Project Component
const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative hover:border-primary transition-all duration-300'>
      <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto'/>
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visit</Link>
        </div>
      </div>
    </article>
  )
}

export const Projects = () => {
  return (
    <>
      <Head>
        <title>Yogesh Sharma | Projects Page</title>
        <meta name='description' content="Projects by Yogesh Sharma" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16' />

          <div className='grid grid-cols-12 gap-24'>
            {/* Featured Project */}
            <div className='col-span-12'>
              <FeaturedProject
                title="AUTOMATIC BOARD CLEANER"
                img={project1}
                summary="The Automatic Board Cleaner project automates the process of cleaning a board without manual effort. When the board becomes full, the cleaner activates automatically, saving time and effort."
                link="/"
                github="https://github.com/yogeshsharma15"
                type="IOT BASED PROJECT"
              />
            </div>

            {/* Project 1 */}
            <div className='col-span-6'>
              <Project
                title="AUTOMATIC WINDOW CLOSING"
                img={project2}
                summary="An IoT-based system that automatically closes windows upon detecting rain or dust, ensuring cleanliness and protection from weather."
                link="/"
                github="https://github.com/yogeshsharma15"
                type="IOT BASED PROJECT"
              />
            </div>

            {/* Project 2 */}
            <div className='col-span-6'>
              <Project
                title="VIRTUAL PAINTER"
                img={project3}
                summary="A computer vision-based project that tracks hand movements to draw on the screen, creating art without the need for traditional input devices."
                link="/"
                github="https://github.com/yogeshsharma15"
                type="COMPUTER VISION PROJECT"
              />
            </div>

            {/* Project 4 */}
            <div className='col-span-6'>
              <Project
                title="TO-DO LIST"
                img={project4}
                summary="A simple and effective to-do list web app built using the MERN stack to manage tasks efficiently."
                link="https://yogeshsharma15.github.io/to-do-list/"
                github="https://github.com/yogeshsharma15"
                type="WEB DEVELOPMENT"
              />
            </div>

            {/* Project 5 */}
            <div className='col-span-6'>
              <Project
                title="E-COMMERCE SITE"
                img={project5}
                summary="A full-featured e-commerce website built using the MERN stack, offering features like product listings, cart management, and checkout."
                link="https://yogeshsharma15.github.io/E-commerce-site/"
                github="https://github.com/yogeshsharma15"
                type="WEB DEVELOPMENT"
              />
            </div>
            {/* Project 6 */}
            <div className='col-span-6'>
              <Project
                title="Automatic Crop Yield Prediction"
                img={project6}
                summary="A simple and effective to-do list web app built using the MERN stack to manage tasks efficiently."
                link="https://yogeshsharma15.github.io/to-do-list/"
                github="https://github.com/yogeshsharma15"
                type="Machine Learning"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects;
