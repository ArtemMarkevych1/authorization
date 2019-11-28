import React from "react";

export default props => (
  <div>
    <h3>Car name: {props.name}</h3>
    <h3>Year: {props.year}</h3>
    <button onClick={props.onChangeTitle}>Click here</button>
  </div>
);

// export default props => (
//   <div>
//     <h3>Car name: {props.name}</h3>
//     <p>
//       Number: <strong>{props.year}</strong>
//     </p>
//     <button onClick={props.onChangeTitle}>Click</button>
//   </div>
// );
