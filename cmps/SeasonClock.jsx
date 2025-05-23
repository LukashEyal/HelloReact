const { useState, useEffect, useRef } = React

export function SeasonClock() {
  const [time, setTime] = useState(new Date())
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId) // Clean up on unmount
  }, [])




  const getSeason = (month) => {
    if (month >= 2 && month <= 4) return 'Spring'
    if (month >= 5 && month <= 7) return 'Summer'
    if (month >= 8 && month <= 10) return 'Autumn'
    return 'Winter'
  }

  const season = getSeason(time.getMonth())
  const monthName = time.toLocaleString('default', { month: 'long' })
  const dayName = time.toLocaleString('default', { weekday: 'long' })
  const timeString = time.toLocaleTimeString()
  const imgSrc = `./assets/${season}.png`
 

  const containerClass = `season-clock ${isDark ? 'dark' : 'light'}`


  return (
    <div className={containerClass} onClick={() => setIsDark(!isDark)}>
      
      <h2>{monthName} ({season})</h2>

  
      <img src={imgSrc} className="image" alt="season" />
      <p>{dayName}</p>
      
      <h3>{timeString}</h3>
    </div>
  )
}
