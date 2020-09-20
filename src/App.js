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
        <div className={s.description}>
          Si les rois ont voulu être inhumés dans une peau de cerf nappant leur
          dépouille mortelle, c’est qu’elle a la vertu, elle qui vivante
          ressuscitait chaque année par ses bois, de montrer à l’âme le chemin
          de la vie éternelle.
        </div>
      </div>
      <div style={{ backgroundColor: 'mediumspringgreen' }} className={s.page}>
        <div className={s.description}>
          Si les rois ont voulu être inhumés dans une peau de cerf nappant leur
          dépouille mortelle, c’est qu’elle a la vertu, elle qui vivante
          ressuscitait chaque année par ses bois, de montrer à l’âme le chemin
          de la vie éternelle.
        </div>
        <img src={cerf} alt="cerf" />
      </div>
      <div style={{ backgroundColor: 'lightsalmon' }} className={s.page}>
        <img src={cerf} alt="cerf" />
        <div className={s.description}>
          Si les rois ont voulu être inhumés dans une peau de cerf nappant leur
          dépouille mortelle, c’est qu’elle a la vertu, elle qui vivante
          ressuscitait chaque année par ses bois, de montrer à l’âme le chemin
          de la vie éternelle.
        </div>
      </div>
    </div>
  )
}

export default App
