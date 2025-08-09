import { useState } from "react";
import axios from "axios";

export default function Temperature() {
  const [fetchedTemp, setFetchedTemp] = useState(null);
  const [error, setError] = useState(null);

  const API_BASE = "https://cors-anywhere.herokuapp.com/https://aaron08.pythonanywhere.com";

  const fetchTemperature = async () => {
    try {
      setError(null);
      const res = await axios.get(`${API_BASE}/temperature`);
      setFetchedTemp(res.data.temperature);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch temperature.");
    }
  };

  return (
    <div>
      <h1>Temperature</h1>
      <button onClick={fetchTemperature}>Get Temperature</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {fetchedTemp !== null && <p>{fetchedTemp}°C</p>}
    </div>
  );
}
