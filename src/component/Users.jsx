import React from "react";


const Users = () => {
    const cardStyles = {  
        online: {  
           border:"2px green solid",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
        },  
        ofline: {  
           border:"1px yellow solid",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)"
        },  
    }

  const data = [
    {
      name: "aaa",
      age: 22,
      city: "cudd",
      online: true,
      // Images: person3,
      stack:true  
    },
    {
      name: "bbb",
      age: 19,
      city: "cudd",
      online: false,
      // Images: person1,
      stack:true
    },
    {
      name: "ccc",
      age: 12,
      city: "cudd",
      online: true,
      // Images: person2,
      stack:false
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((valu, index) => (
            <div className="col-4 m-0 p-0">
              <div class="card p-3 mx-3 align-items-center" style={valu.online ? cardStyles.online : cardStyles.ofline} key={index}>
                <img class="card-img-top w-25" src={valu.Images} alt="Title" />
                <div class="card-body"> 
                  <h4 class="card-title"> Name :{valu.name}</h4>
                  <p class="card-text"> Age :{valu.age}</p>
                  <p class="card-text">City :{valu.city}</p>
                  <p class="card-text">In Stack :{valu.stack ? "yes" : "no"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Users;
