import { DarkLayout } from '@/components/layouts/DarkLayout';
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';
import { ReactElement } from 'react';



export default function AboutPage() {
    return (
        <>
            <h2>About Page</h2>
            <h1 className={'description'}>
                <Link className={'title'} href='/'>Home</Link>
                <Link className={'title'} href='/contact'>Contact</Link>
            </h1>
        </>
    )
}


AboutPage.getLayout = function getLayout( page:ReactElement ){
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
