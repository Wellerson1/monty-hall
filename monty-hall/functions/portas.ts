import { PortaModel } from "../model/porta";

export function criarPortas(qtd: number, portaComPresente: number): PortaModel[] {
    return Array.from({length: qtd}, (_,i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPorta(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualPortaModificada = portaAtual.numero === portaModificada.numero
       
        if(igualPortaModificada) {
            return portaModificada
        } else {
            return portaAtual.desselecionar()
        }
    })
}