import { useAtom } from "jotai";
import { readOnlyPerimeter } from "./atoms";

export function Perimeter() {
  const [perimeter] = useAtom(readOnlyPerimeter);

  return (
    <div className="row">
      <h4>Perimeter</h4>
      <h3>{perimeter}</h3>
    </div>
  );
}
