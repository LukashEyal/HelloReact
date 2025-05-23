const { useState, useEffect } = React;


export  function MouseMonitor() {
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function updatePos(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }

    if (isOn) {
      document.addEventListener('mousemove', updatePos);
    }

    return () => {
      document.removeEventListener('mousemove', updatePos);
    };
  }, [isOn]);

  return (
    <div className="mouse-monitor">
      <h3>Mouse Position</h3>
      {isOn && <p>x: {pos.x}, y: {pos.y}</p>}
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}
