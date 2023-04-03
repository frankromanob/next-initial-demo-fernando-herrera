import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
          <h2>Contact Page</h2>
          <h1 className={'description'}>
            <Link className={'title'} href='/'>Home</Link>
            <Link className={'title'} href='/about'>About</Link>
          </h1>
    </MainLayout>
  )
}
