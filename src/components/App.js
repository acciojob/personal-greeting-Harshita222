// import React, { useState } from "react";
// import "./../styles/App.css";

// const App = () => {
//   const [name, setName] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };
//   return (
//     <div>
//       {/* Do not remove the main div */}
//       Enter your name:
//       <input type="text" name="name" value={name} onChange={handleChange} />
//       <p>Hello, {name}!</p>
//     </div>
//   );
// };

// export default App;
import React from "react";
import "./../styles/App.css";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name:"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  );
};
export default App;
