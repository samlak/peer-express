import Head from 'next/head'
import CryptoDeposit from '../../components/CryptoDeposit'

export default function Deposit() {
  return (
    <div className='mt-10'>
      <Head>
        <title>Peer Express</title>
      </Head>

      <h1 className='text-center'>Peer Express</h1>
      <p className='text-center'>The easiest to send money across Africa using bank transfer</p>
      <p className='text-center'>Deposit Crypto into your Account</p>

      <CryptoDeposit />
    </div>
  )
}