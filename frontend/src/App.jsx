import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:4500/api/test") 
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
