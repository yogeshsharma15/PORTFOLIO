import React from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import certificate1 from "../../public/images/projects/AIMLCERTIFICATE-1.jpg"
import certificate2 from "../../public/images/projects/ZSCALAR-1.jpg"
import certificate3 from "../../public/images/projects/Walmart.jpg.jpg"
import certificate4 from "../../public/images/projects/TATAGROUP.jpg.jpg"

// Certificate Component
const Certificate = ({ img, title, summary, link }) => {
    return (
        <li className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-8'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <Link href={link} target="_blank" className='mt-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>View Certificate</Link>
            </div>
        </li>
    )
}

const Certificates = () => {
  return (
    <>
      <Head>
        <title>Yogesh Sharma | Certificates Page</title>
        <meta name='description' content="Certificates by Yogesh Sharma" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!" className='mb-16' />
            
            <ul className='grid grid-cols-2 gap-16'>
                {/* Certificate 1 */}
                <Certificate
                    img={certificate1}
                    title="Google AI-ML Certificate"
                    summary="Certification in AI and Machine Learning from Google, demonstrating expertise in implementing AI/ML solutions."
                    link="https://www.aicte-india.org/"
                />

                {/* Certificate 2 */}
                <Certificate
                    img={certificate2}
                    title="Cloud Computing (ZScaler)"
                    summary="ZScaler Cloud Computing Certification, focusing on cloud architecture and solutions."
                    link="https://www.aicte-india.org/"
                />

                {/* Certificate 3 */}
                <Certificate
                    img={certificate3}
                    title="Advanced Software Engineering"
                    summary="Advanced Software Engineering Certificate from Walmart Global Tech, focusing on cutting-edge software development practices."
                    link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_FtgQjfFdCYKxHDhCH_1727544407655_completion_certificate.pdf"
                />

                {/* Certificate 4 */}
                <Certificate
                    img={certificate4}
                    title="Data Visualization (Tata Group)"
                    summary="Certificate in Data Visualization from Tata Group, focused on leveraging data for business insights."
                    link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_FtgQjfFdCYKxHDhCH_1727273967696_completion_certificate.pdf"
                />
            </ul>
        </Layout>
      </main>
    </>
  )
}

export default Certificates;
