import "./App.css";
import { Area } from "./Area";
import { InputForm } from "./InputForm";
import { Perimeter } from "./Perimeter";
import { Volume } from "./Volume";

function App() {
  return (
    <div>
      <InputForm />
      <Area />
      <Perimeter />
      <Volume />
    </div>
  );
}

export default App;
