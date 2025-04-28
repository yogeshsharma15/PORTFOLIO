import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout';
const Footer=()=>{
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                Built With<span className='text-primary text-2xl px-1 '>&#128147;</span>
                by&nbsp; <Link href="https://www.linkedin.com/in/yogesh-kumar-sharma-b48064269/" target={'_blank'} className='underline underline-offset-2'>Yogesh Sharma</Link>
                </div>
                <Link href="https://www.linkedin.com/in/yogesh-kumar-sharma-b48064269/" target={'_blank'} className='underline underline-offset-2'>Say Hello</Link>
                
            </Layout>
        </footer>
    );
};
export default Footer