import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ariana from './assets/ariana_1.png'
import ariana2 from './assets/ariana_2.png'
import ariana3 from './assets/ariana_3.png'
import ariana4 from './assets/ariana_4.png'


function App() {
  
  const nome = 'Ariana'
  const [currentImage, setCurrentImage] = useState(0)
  const [artistaNome, setArtistaNome] = useState("")
  const [mensa, setMensa] = useState ("")

  
const handleNextImage = () => {
  console.log(currentImage);
  if(currentImage < 3) {
setCurrentImage(currentImage + 1)
  }}
const handlePreviusImage = () => {
 
  if(currentImage >=1) {
setCurrentImage(currentImage - 1)
  }
}
const handleArtistaNome = (e) => {
  
  setArtistaNome(e.target.value)
 
}

const handleVerifica = () => {
  
  
  if (artistaNome == nome){
    setMensa('Parabéns! Você acertou')
  }else {
    setMensa('Não consegue neh Moisés!')
  }
}

 

return (
    <div className="container">
      <div className="filho">
      <button onClick={handlePreviusImage}>Anterior</button>
      <div>
      <div className="figuras">
      <div className="figuras__superior">
      <img src={ariana} alt="" />
      <img src={ariana2} alt="" className={ currentImage >= 1 ? 'show__image': 'not__show__image'} />
      </div>
      <div className="figuras__inferior">
      <img src={ariana3} alt="" className={ currentImage >= 2 ? 'show__image': 'not__show__image'}/>
      <img src={ariana4} alt=""className={ currentImage >= 3 ? 'show__image': 'not__show__image'} />
      </div>
      </div>
      <label>Digite o nome do artista</label>
      <input onChange={handleArtistaNome}></input>
      <button onClick={handleVerifica}>Verifica</button>
     </div>
     <button onClick={handleNextImage} >Proximo</button>
     </div>
     <h1>{mensa}</h1>     
    </div>
  )
}

export default App
