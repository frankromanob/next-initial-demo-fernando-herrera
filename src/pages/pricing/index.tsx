import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout';

export default function PricingPage() {
  return (
    <MainLayout>
          <h2>Pricing Page</h2>
          <h1 className={'description'}>
            <Link className={'title'} href='/'>Home</Link>
          </h1>
    </MainLayout>
  )
}
