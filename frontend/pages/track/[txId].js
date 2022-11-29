import Head from 'next/head'
import Image from 'next/image'
import ConfirmPayment from '../../components/ConfirmPayment'

export default function TrackTransaction() {
  const transactionData = [
    {
      status: "success",
      label: "Sender made payment"
    },
    {
      status: "success",
      label: "Sender payment confirmed"
    },
    {
      status: "success",
      label: "Fund converted to GHS"
    },
    {
      status: "pending",
      label: "Recipient received payment"
    },
    {
      status: "action",
      label: ""
    },
    {
      status: "pending",
      label: "Payment completed"
    }
  ]

  return (
    <div className='mt-10'>
      <Head>
        <title>Peer Express</title>
      </Head>
      
      <div> 
        <h1 className='text-center'>Peer Express</h1>

        {transactionData.map((tx, key) => {
          return (
            tx.status == "action" ? (
              <ConfirmPayment />
            ) : (
              <div>
                <Image
                  src={tx.status == "success" ? "/assets/check-mark.svg" : "/assets/minus.svg"}
                  alt={tx.status}
                  width={25}
                  height={25}
                />
                <div> {tx.label} </div>
              </div>
            )
          )})}
      </div>
    </div>
  )
}
