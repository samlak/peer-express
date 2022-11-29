import { useState } from "react";
import { formInput } from "./data";

export default function CryptoDeposit() {
  const [formData, setFormData] = useState({
    deposit_amount: "",
    buy_rate: "",
    sell_rate: ""
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
        <button type="submit">Deposit</button>
      </div>
    </form>
  );
}
