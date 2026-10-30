
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://hello-world-backend-liart.vercel.app/")
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.log(error);
        setMessage("Unable to connect to backend");
      });
  }, []);

  return (
    <div>
      <h1>React + FastAPI</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
