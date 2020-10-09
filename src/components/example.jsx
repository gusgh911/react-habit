import React, { useEffect, useState } from 'react';

const Example = (props) => {
  const [count, setCout] = useState(1);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>
        You clicked {count} times
      </p>
      <button onClick={() => setCout(count + 1)}>
        Click me
      </button>
    </div>
  )
};


export default Example;




