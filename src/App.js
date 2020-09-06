import React from 'react'

import cerf from './assets/cerf.svg'
import s from './App.module.css'

function App() {
  return (
    <div className={s.app}>
      <div style={{ backgroundColor: 'dodgerblue' }} className={s.page}>
        <div className={s.name}>Franck Paulos</div>
      </div>
      <div style={{ backgroundColor: 'hotpink' }} className={s.page}>
        <img src={cerf} alt="cerf" />
      </div>
      <div style={{ backgroundColor: 'mediumspringgreen' }} className={s.page}>
        <img src={cerf} alt="cerf" />
      </div>
      <div style={{ backgroundColor: 'lightsalmon' }} className={s.page}>
        <img src={cerf} alt="cerf" />
      </div>
    </div>
  )
}

export default App
