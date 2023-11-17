import "./styles.css";
import { ProgressBar } from "./components/ProgressBar";
import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <span> Progress Bar </span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <button
        onClick={() => {
          window.location.reload(false);
        }}
      >
        Relod
      </button>
      {success ? "Complete" : "Loading..."}
    </div>
  );
}
