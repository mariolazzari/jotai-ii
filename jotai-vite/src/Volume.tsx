import { useAtom } from "jotai";
import { readOnlyVolume } from "./atoms";

export function Volume() {
  const [volume] = useAtom(readOnlyVolume);

  return (
    <div className="row">
      <h4>Volume</h4>
      <h3>{volume}</h3>
    </div>
  );
}
