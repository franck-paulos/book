import React from 'react'

import cerf from './assets/cerf.svg'
import gameboy from './assets/Gameboy.svg'
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
      <div style={{ backgroundColor: '#7700faa3' }} className={s.page}>
        <div className={s.description}>
          La Game Boy est une console portable de jeu vidéo 8-bits de quatrième
          génération développée et fabriquée par Nintendo. Mise en vente au
          Japon le 21 avril 1989, puis en Amérique du Nord en octobre 1989, et
          enfin en Europe le 28 septembre 1990, elle est la première console
          portable de la gamme des Game Boy
        </div>
        <img src={gameboy} alt="gameboy" />
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
