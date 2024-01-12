import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // ------------------> 1
  // const [count, setCount] = useState(() => 0);  // --------> 2

  let count2 = 1; // -----------------------------------------> 3
  function handleIncrease() {
    setCount((count) => count + 1); // -----------------------> 4
    // setCount(count + 1); // -------------------------------> 5
    count2 += 1; // ------------------------------------------> 6
  }

  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      <button
        onClick={handleIncrease}
        className=" w-40 rounded-full bg-orange-300  px-2 py-4"
      >
        Increase Count
      </button>
      <div className="mt-2">
        {count} - {count2}
      </div>
    </div>
  );
}

export default App;
