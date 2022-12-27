
import React, { useState } from "react"
import Card from "../components/Card"
import styles from '../styles/Form.module.css'
import Link from 'next/link'
import InputNumber from "../components/InputNumber"

export default function Formulario() {

  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.form}>
      <div>
      <Card bgColor="#c0392c"> 
        <h2>Monty Hall</h2>
      </Card>
      <Card>
      <InputNumber value={comPresente} 
                     text="Porta com presente"
                     onChange={nova => setComPresente(nova)}/>
      </Card>
      </div>
      <div>
      <Card>
      <InputNumber value={qtdPortas} 
                     text="Qtd Portas"
                     onChange={novaQtd => setQtdPortas(novaQtd)}/>

      </Card>
      <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
      <Card bgColor="#28a085">
        <h2>Iniciar</h2>
      </Card>
      </Link>
      </div>
    </div>
  )
}
