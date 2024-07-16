"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleQuantityChange = (quantity: number) => {
    if (count + quantity < 1) return;

    setCount(count + quantity);
  };
  return (
    <div className="flex">
      <button>
        <IoRemoveCircleOutline
          onClick={() => handleQuantityChange(-1)}
          size={30}
        />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
        {count}
      </span>
      <button>
        <IoAddCircleOutline
          onClick={() => handleQuantityChange(+1)}
          size={30}
        />
      </button>
    </div>
  );
};
