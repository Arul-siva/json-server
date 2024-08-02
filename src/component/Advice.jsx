import React from "react";
import { useState } from "react";
import axios from "axios";


const Advice = () => {
  const [advice, setadvice] = useState("");

  const adviceHandle =  () => {
    axios.get("https://api.adviceslip.com/advice")
    .then((res)=>{
      const dd = res.data.slip.advice
      setadvice(dd)
    })
    .catch((err)=>{
      console.log("err" ,err);
    })
  };

  return (
    <>
      <div>{advice}</div>
      <button onClick={adviceHandle} className="btn btn-success ms-5 ">
        click
      </button>
    </>
  );
};

export default Advice;
