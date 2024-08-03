import { useId, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const id = useId();
  return (
    <main>
      <h1>This is App</h1>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click
        </button>
      </div>
      <div>
        <span id={id}>Count:</span>
        <span aria-labelledby={id}>{count}</span>
      </div>
    </main>
  );
}
