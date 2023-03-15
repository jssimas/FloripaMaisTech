import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function Card(props) {

  /* 
    var props = {
      titulo: titulo,
      imagem: imagem,
      width: width
    }
  */

  return ( 
    <div>
      <h1 id="" className="titulo">{titulo}</h1>
      <img width={width} src={imagem} alt={alt} />
      <a href={imagem}>ver imagem</a>
    </div>
   );
}

export default Card;