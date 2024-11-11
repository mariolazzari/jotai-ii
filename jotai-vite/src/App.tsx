import { Area } from "./Area";
import { FenceCost } from "./FenceCost";
import { InputForm } from "./InputForm";
import { Perimeter } from "./Perimeter";
import { Volume } from "./Volume";

function App() {
  return (
    <div className="container">
      <InputForm />
      <Area />
      <Perimeter />
      <Volume />
      <FenceCost />
    </div>
  );
}

export default App;
