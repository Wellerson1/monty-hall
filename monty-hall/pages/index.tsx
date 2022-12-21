
import Porta from "../components/Porta"
import React, { useState } from "react"
import {criarPortas,  atualizarPorta}  from "../functions/portas"

export default function Home() {
  const [ portas, setPortas ] = useState(criarPortas(3, 1));

  function renderPortas() {
    return portas.map(porta => {
     return <Porta key={porta.numero} 
                    onChange={novaPorta => { 
                      console.log(atualizarPorta(portas, novaPorta))
                      return setPortas(atualizarPorta(portas, novaPorta))}} 
                    value={porta}/>
    })
  }

  return (<>
    <div style={{display:"flex"}}>
      {renderPortas()}
    </div>
    </>
  )
}
