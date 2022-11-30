import Head from 'next/head'
import SendMoney from '../components/SendMoney'
import PaymentInfo from '../components/PaymentInfo'

export default function Home() {
  return (
    <div className='mt-10'>
        <Head>
          <title>Peer Express</title>
        </Head>
        <SendMoney />
        <PaymentInfo />
    </div>
  )
}
