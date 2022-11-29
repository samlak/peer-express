import Head from 'next/head'
import CreateMerchant from '../../components/CreateMerchant'

export default function Create() {
  return (
    <div className='mt-10'>
      <Head>
        <title>Peer Express</title>
      </Head>

      <h1 className='text-center'>Peer Express</h1>
      <p className='text-center'>The easiest to send money across Africa using bank transfer</p>
      <p className='text-center'>Setup your Merchant Account</p>

      <CreateMerchant />
    </div>
  )
}