import React, {useEffect, useState} from 'react'

const LifeCycleInFunctionalComp = () => {
  // 1. useState is used to create state in a functional component
  const [count, setCount] = useState(0);
  
  // 2. useEffect with an empty dependency array mimics componentDidMount
  useEffect(() => {
    console.log('3. useEffect (componentDidMount): Component has been mounted');
    
    // Example of setting up a timer (not required for interview demo)
    // const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    // }, 1000);
  
    // 3. Cleanup function inside useEffect mimics componentWillUnmount
    return () => {
      console.log('useEffect cleanup (componentWillUnmount): Component is about to be unmounted');
      // clearInterval(interval);
    };
  }, []); // Empty array means this effect runs only once, like componentDidMount
  
  // 4. useEffect without dependencies mimics componentDidUpdate for every state or prop change
  useEffect(() => {
    console.log('4. useEffect (componentDidUpdate): Component has been updated');
  });

  const add1 = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  console.log("1. initial stage")
  return (
    <div>
      <h1>React Lifecycle Methods Demo</h1>
      <p>Count: {count}</p>
      <p>Count: {console.log("2. retuen block")}</p>
      <button onClick={add1} >add 1</button>
    </div>
  );
}

export default LifeCycleInFunctionalComp

