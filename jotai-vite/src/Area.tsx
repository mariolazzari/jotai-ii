import { useAtom } from "jotai";
import { readOnlyArea } from "./atoms";

export function Area() {
  const [area] = useAtom(readOnlyArea);

  return (
    <div className="row">
      <h4>Area</h4>
      <h3> {area}</h3>
    </div>
  );
}
