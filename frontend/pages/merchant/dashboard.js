import Head from 'next/head'
import MerchantDashboard from '../../components/MerchantDashboard'

export default function Dashboard() {
  return (
    <div className='mt-10'>
      <Head>
        <title>Peer Express</title>
      </Head>

      <h1 className='text-center'>Peer Express</h1>
      <p className='text-center'>The easiest to send money across Africa using bank transfer</p>
      <p className='text-center'>Dashboard</p>

      <MerchantDashboard />
    </div>
  )
}