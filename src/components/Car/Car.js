import React from "react";

export default ({ name, year, children }) => (
  <div>
    <h3>Car name: {name}</h3>
    <p>
      Number: <strong>{year}</strong>
    </p>
    {children}

  </div>
);
