import Link from 'next/link'

export default function ConfirmPayment() {

  return (
    <div> 
      <p>Confirm you have received the payment</p>
      <form>
        <label>Transaction Key</label>
        <input 
          className="border"
          type="text" 
          name="transaction_key"
          onChange={() => {}} 
        />
        <button>Confirm</button>
      </form>

    </div>
  );
}
