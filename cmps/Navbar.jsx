export function Navbar({ setRoute }) {
  return (
    <nav>
      <button onClick={() => setRoute('SeasonClock')}>Season Clock</button>
      <button onClick={() => setRoute('MouseMonitor')}>Mouse Monitor</button>
      <button onClick={() => setRoute('CountDown')}>Count Down</button>
      <button onClick={() => setRoute('AnimalList')}>Animal List</button>
    </nav>
  )
}