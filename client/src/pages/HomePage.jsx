import { useState } from "react";

export default function HomePage(props) {

  const { user } = props
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5005/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }

  return (
    <div>
      <h1>
        <title>OpenAI Quickstart</title>
      </h1>

      <main className="">
         { user ? <h1>YES USER FOUND</h1> : <h1>NO USER</h1> }
        <h3>Name my tour</h3>
        <form onSubmit={onSubmit}>
          <input type="text" name="animal" placeholder="Enter an animal" value={animalInput} onChange={(e) => setAnimalInput(e.target.value)} />
          <input type="submit" value="Generate names" />
        </form>
        <div className="">{result}</div>
      </main>
    </div>
  );
}
