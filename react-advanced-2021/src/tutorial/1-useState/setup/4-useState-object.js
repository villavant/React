import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Jorge",
    age: 24,
    message: "random message",
  });
  const [name,setName] = useState('peter');
  const [age,setAge] = useState(28);
  const [message,setMessage] = useState('New message');

  // const changeMessage = () => {
  //   setPerson({ ...person, message: "Hello world" });
  // };

  const changeMessage = () => {
    setMessage("Hello world");
  };
  // return (
  //   <>
  //     <h3>{person.name}</h3>
  //     <h3>{person.age}</h3>
  //     <h3>{person.message}</h3>
  //     <button className="btn" onClick={changeMessage}>
  //       Change message
  //     </button>
  //   </>
  // );

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};


export default UseStateObject;
