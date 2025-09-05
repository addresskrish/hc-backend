import { useState, useEffect } from "react";
import "./App.css"
import axios from "axios";

export default function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Run successfully");
      });
  }, []);

  const jokesData = jokes.map((joke) => {
    return (
      <li key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.joke}</p>
      </li>
    );
  });

  return (
    <>
      <h1>Jokes App</h1>
      <p>JOKES: {jokes.length}</p>
      <ul>{jokesData}</ul>
    </>
  );
}
