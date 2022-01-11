import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setName] = useState(1);

  useEffect(() => {
    document.title = `Count (${count})`;
  });

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
        <button onClick={() => setName(count + 1)}>Count ({count})</button>
      </div>
    </div>
  );
}

export default App;
