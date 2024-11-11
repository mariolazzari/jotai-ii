import { useAtom } from "jotai";
import { sideLengthAtom } from "./atoms";

export function Perimeter() {
  const [sideLength] = useAtom(sideLengthAtom);

  return (
    <div className="row">
      <div>Perimeter</div>
      <div>{4 * sideLength}</div>
    </div>
  );
}
