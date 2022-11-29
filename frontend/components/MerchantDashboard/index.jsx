import { incommingPayment, outgoingPayment } from "./data";

export default function MerchantDashboard() {

  return (
    <div>
      <p>Wallet Balance: 100 USDT</p>

      <div>
        <p>Incoming Payment Request</p>
        {incommingPayment.map((payment, key) => (
          <div key={key}>
            <p>{payment.name} sent {payment.amount}</p>
            <p>You have 20 minutes to confirm this payment</p>
            <div>
              <button>Confirm</button>
              <button>Query</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p>Outgoing Payment Request</p>
        {outgoingPayment.map((payment, key) => (
          <div key={key}>
            <p>Send {payment.amount} to {payment.name} </p>
            <p>May payment to this account</p>
            <p>Account name: {payment.account_name}</p>
            <p>Account number: {payment.account_number}</p>
            <p>Bank name: {payment.bank_name}</p>
            <p>Amount to send: {payment.amount}</p>
            <p>You have 20 minutes to make this payment</p>
            <div>
              <p>Contact {payment.name}</p>
              <a href={`tel:${payment.phone_number}`}>Call</a>
              <a href={`mailto:${payment.email}`}>Email</a>
            </div>
            <div>
              <button>Payment Made</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
