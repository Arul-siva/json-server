import React, { useState } from "react";
// import Demo from "./Demo";

const Sample = () => {
  const [input, setinput] = useState("");
  const [viewinput, setviewinput] = useState([]);

  function getval() {
    if (input) {
      setviewinput((prvinput) => [...prvinput, input]);
      console.log(viewinput);
    } else {
      console.log("no val");
    }
  }

  return (
    <>
      <div className="text-center">
        <input type="text" onChange={(e) => setinput(e.target.value)} />
        <button onClick={getval}>click</button>
      </div>
    </>
  );
};

export default Sample;
