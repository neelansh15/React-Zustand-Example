import "./App.css";

import { useStore } from "./State";
import Bears from "./Bears";
let bears;

function ShowBears() {
  bears = useStore((state) => state.bears);
  return <p>{bears} bears in the forest</p>;
}

function AddBear() {
  const incrementBear = useStore((state) => state.increasePopulation);
  return <button onClick={() => incrementBear()}>Add bear</button>;
}

function RemoveBear() {
  const removeBear = useStore((state) => state.removeBear);

  return <button onClick={() => removeBear()}>Remove bear</button>;
}

function NukeBears() {
  const removeAllBears = useStore((state) => state.removeAllBears);
  return <button onClick={() => removeAllBears()}>Nuke all bears</button>;
}

function App() {
  return (
    <div className="App">
      <ShowBears />
      <div class="actions">
        {useStore((state) => state.bears) != 0 ? <RemoveBear /> : null}
        <AddBear />
        {useStore((state) => state.bears) != 0 ? <NukeBears /> : null}
      </div>
      <br />
      <Bears />
    </div>
  );
}

export default App;
