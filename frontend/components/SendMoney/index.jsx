import { useState } from "react";
import { formInput } from "./data";

export default function SendMoney() {
  const [formData, setFormData] = useState({
    sender_country: "",
    sender_name: "",
    sender_email: "",
    sender_phone_number: "",
    amount: "",
    recipient_country: "",
    recipient_name: "",
    recipient_email: "",
    recipient_phone_number: "",
    recipient_bank_name: "",
    recipient_account_number: "",
  });

  return (
    <div>
      <h1 className='text-center'>Peer Express</h1>
      <p className='text-center'>The easiest to send money across Africa using bank transfer</p>
      <h2 className='text-center'>Send money</h2>
      <form>
        <div className="flex flex-wrap w-1/2 mx-auto">
          {formInput.map((input, key) => {
            return input.type == "select" ? (
              <div key={key} className="flex flex-col w-full">
                <label>{input.label}</label>
                <select 
                  name={input.name} 
                  onChange={() => {}}
                  className="border"
                >
                  <option value="" defaultValue>{input.defaultOption}</option>
                  {input.options.map((option, inputKey) => (
                    <option value={option} key={inputKey}>{option}</option>
                  ))}
                </select>
              </div>
            ) : (
              <div key={key} className="flex flex-col w-full">
                <label>{input.label}</label>
                <input 
                  className="border"
                  placeholder={input.placeholder}
                  type={input.type} 
                  name={input.name} 
                  onChange={() => {}} 
                />
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button type="submit">Proceed</button>
        </div>
      </form>
    </div>
  );
}
