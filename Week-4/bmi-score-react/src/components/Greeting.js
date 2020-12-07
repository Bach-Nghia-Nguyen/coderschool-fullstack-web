import React from "react";

const Greeting = ({ name }) => {
  console.log(name);
  return <h1 className="text-primary">Hello {name}</h1>;
};

export default Greeting;
