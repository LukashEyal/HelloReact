const { useState, useEffect, useRef } = React

import { Navbar } from "./cmps/Navbar.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"  
import { CountDown } from "./cmps/CountDown.jsx"
import { AnimalList } from "./cmps/AnimalList.jsx"


export function RootCmp() {

  const [ route, setRoute ] = useState('')

  return <section className="app">

    
      <header>
      <Navbar setRoute={setRoute} />
      </header>
   

      <main>
      {route === 'SeasonClock' && <SeasonClock />}
      {route === 'MouseMonitor' && <MouseMonitor />}
      {route === 'CountDown' && <CountDown startFrom={10} onDone={() => console.log('Done!')} />}
      {route === 'AnimalList' && <AnimalList />}
      </main>
   </section>



  
}
