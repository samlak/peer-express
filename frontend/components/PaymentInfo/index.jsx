export default function PaymentInfo() {

  return (
    <div>
      <h1 className='text-center'>Peer Express</h1>
      <p>Your are sending: 30,000NGN</p>
      <p>The recipient will receive: 1,000GHS</p>
      <p>Make a bank transfer of 30,000NGN to this account</p>
      <p>Account Name: Ibrahim Iweala</p>
      <p>Account Number: 788327328313</p>
      <p>Bank Name: Firstbank Nigeria</p>
      <div>
        <p>Contact Ibrahim Iweala</p>
        <a href="tel:+234895585844">Call</a>
        <a href="mailto:success@gmail.com">Email</a>
      </div>
      <div>
        <button>Cancel Payment</button>
        <button>Payment Made</button>
      </div>
    </div>
  );
}
