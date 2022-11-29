import Head from 'next/head'
import Link from 'next/link'

export default function PaymentCompleted() {
  return (
    <div className='mt-10'>
      <Head>
        <title>Peer Express</title>
      </Head>
      
      <h1 className='text-center'>Peer Express</h1>
      <div>
        <p>
          Bank Transfer Status: 
          <span> Confirmed</span>
        </p>
        <p>Share this link with Arowale Emmanuel to track the transaction progress</p>
        <Link href="http://localhost:3000/track/4333222"> 
          http://localhost:3000/track/4333222 
        </Link>
        <div>
          This is the private key for transaction confirmation: 
          <p>43hh4h242uu24u4JFBKDJFH</p>
        </div>
      </div>
    </div>
  )
}
