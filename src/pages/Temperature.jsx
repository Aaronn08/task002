import { useState } from "react";
import axios from "axios";
import "./Temperature.css";

export default function Temperature() {
  const [fetchedTemp, setFetchedTemp] = useState(null);
  const [error, setError] = useState(null);

  const API_BASE =
    "https://cors-anywhere.herokuapp.com/https://aaron08.pythonanywhere.com";

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
    <section className="temperature">
      <h1>Temperature</h1>
      <button onClick={fetchTemperature}>Get Temperature</button>
      {error && <p className="error">{error}</p>}
      {fetchedTemp !== null && <p className="result">{fetchedTemp}°C</p>}
    </section>
  );
}
