import { useState } from "react";
import { formInput } from "./data";

export default function CreateMerchant() {
  const [formData, setFormData] = useState({
    merchant_country: "",
    merchant_name: "",
    merchant_email: "",
    merchant_phone_number: "",
    merchant_bank_name: "",
    merchant_account_number: ""
  });

  return (
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
        <button type="submit">Create</button>
      </div>
    </form>
  );
}
