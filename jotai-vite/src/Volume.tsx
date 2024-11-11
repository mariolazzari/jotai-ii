import { useAtom } from "jotai";
import { sideLengthAtom } from "./atoms";

export function Volume() {
  const [sideLength] = useAtom(sideLengthAtom);

  return (
    <div className="row">
      <div>Volume</div>
      <div>{sideLength * sideLength * sideLength}</div>
    </div>
  );
}
