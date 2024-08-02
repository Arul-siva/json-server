import React from "react";
import suncloud from "../component/images/suncloud.png";
import humitidy from "../component/images/humitidy.png";
import air from "../component/images/air.png";
const Wether = () => {
  return (
    <>
      <div className="card w-25 mx-auto align-items-center  p-3">
        {/* input */}
        <input type="text" className="w-100 p-2" />
        <img className="img-fluid" src={suncloud} alt="Title" />
        <div className="w-100 p-0 m-0 text-center ">
          <h5>30*C</h5>
          <h1 className="card-title py-3">Chennai</h1>
          <div className="">
          <div className="">
            <p className="mx-2">Latidute :</p>
            <p className="mx-2">Longidute :</p>
          </div>
          <div className="ca">
            <div className="">
              <img src={humitidy} alt=""  className="img-fluid w-25" />
              <p>Humidity</p>
            </div>
            <div className="">
            <img src={air} alt="" className="img-fluid w-25" />
            <p>Wind speed</p>
            </div>
          </div>
          </div>
        </div>
        <div className="py-2 text-secondary">Designed by root</div>
      </div>
    </>
  );
};

export default Wether;
