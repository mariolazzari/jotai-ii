import { useAtom } from "jotai";
import { fenceCostAtom } from "./atoms";

export function FenceCost() {
  const [fenceCost] = useAtom(fenceCostAtom);

  console.log("first", fenceCost);

  return (
    <div className="row">
      <h4>Fence cost</h4>
      <h3>{fenceCost}</h3>
    </div>
  );
}
