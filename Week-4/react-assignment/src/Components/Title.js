import React, { useState, useEffect } from "react";

const Title = () => {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={changeCount}>Click me</button>
    </div>
  );
};

export default Title;
