import { useAtom } from "jotai";
import { ChangeEventHandler, useState } from "react";
import { sideLengthAtom } from "./atoms";

export function InputForm() {
  const [length, setLength] = useState(0);
  const [, setSideLength] = useAtom(sideLengthAtom);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { valueAsNumber } = e.target;
    setLength(valueAsNumber);
  };

  return (
    <div className="column">
      <input
        className="textbox"
        type="number"
        value={length}
        name="side_length"
        onChange={handleChange}
      />
      <button
        className="side_length_button"
        onClick={() => setSideLength(length)}
      >
        Set Side Length
      </button>
    </div>
  );
}
