
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h2>Home Page</h2>
      <h1 className={'description'}>
        <Link className={'title'} href='/about'>About</Link>
        <Link className={'title'} href='/contact'>Contact</Link>
      </h1>
    </MainLayout>
  )
}
