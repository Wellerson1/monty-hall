import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import styles from "../../../styles/Jogo.module.css"
import { criarPortas, atualizarPorta } from "../../../functions/portas";
import Link from "next/link"
import { useRouter } from "next/router";

export default function jogo() {
  const router = useRouter()
    const [ portas, setPortas ] = useState([])
    const [valido, setValido] = useState(false)

    useEffect(() => {
      const qtdPortasValido = +router.query.portas > 0 && +router.query.portas <= 10
      const comPortaValido = +router.query.tempresente <= +router.query.portas && +router.query.tempresente > 0

      setValido(qtdPortasValido && comPortaValido)
    }, [portas])

    useEffect(() => {
      setPortas(criarPortas(+router.query.portas, +router.query.tempresente))
    }, [router?.query])

    function renderPortas() {
      return portas.map(porta => {
       return <Porta key={porta.numero} 
                      onChange={novaPorta => setPortas(atualizarPorta(portas, novaPorta))}
                      value={porta}/>
      })
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderPortas() : <h1>Números invalidos</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button className={styles.botao}>Reiniciar o jogo</button>
                </Link>
            </div>
        </div>
      )
}