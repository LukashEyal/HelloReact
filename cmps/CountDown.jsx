const { useState, useEffect } = React;

export function CountDown({ startFrom, onDone }) {
  const [count, setCount] = useState(startFrom);

  useEffect(() => {
    if (count === 0) {
      onDone();
      return;
    }

    const timer = setTimeout(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onDone]);

  
  const className = `countdown${count <= 5 ? ' red' : ''}`;


  return <div className={className}>{count}</div>;
}
