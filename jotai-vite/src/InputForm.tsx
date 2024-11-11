import { useAtom } from "jotai";
import { ChangeEventHandler, useState } from "react";
import { priceAtom, sideLengthAtom } from "./atoms";

type Value = {
  sideLength: number;
  price: number;
};

export function InputForm() {
  const [value, setValue] = useState<Value>({ sideLength: 0, price: 0 });
  const [, setSideLength] = useAtom(sideLengthAtom);
  const [, setPrice] = useAtom(priceAtom);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, valueAsNumber } = target;
    setValue({ ...value, [name]: valueAsNumber });
  };

  const onButtonClick = () => {
    setSideLength(value.sideLength);
    setPrice(value.price);
  };

  return (
    <div className="container">
      <div className="row">
        <label htmlFor="sideLenght">Side length</label>
        <input
          className="textbox"
          type="number"
          value={value.sideLength}
          name="sideLength"
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label htmlFor="price">Price</label>
        <input
          className="textbox"
          type="number"
          value={value.price}
          name="price"
          onChange={handleChange}
        />
      </div>

      <button onClick={onButtonClick}>Set Value</button>
    </div>
  );
}
