import React, { useId } from "react";

const InputBox = (props) => {
  // label,
  //   amount,
  //   onAmountchange,
  //   onCurrencyChange,
  //   CurrencyOptions = [],
  //   selectCurrnecy = "usd",
  //   amountDisable = false,
  //   currencyDisable = false,
  //   className = ""
  let {
    label,
    amount,
    onAmountchange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrnecy = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
 } = props;

  const amontInputId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label
            htmlFor={amontInputId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amontInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountchange && onAmountchange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrnecy}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
