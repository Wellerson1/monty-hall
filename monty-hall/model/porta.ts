export class PortaModel {
    #numero: number
    #selecionada: boolean
    #aberta: boolean
    #temPresente: boolean

    constructor(numero: number, 
               temPresente = false,
               selecionada = false, 
               aberta = false, 
               ) {
        this.#numero = numero
        this.#selecionada = selecionada
        this.#aberta = aberta
        this.#temPresente  = temPresente
    }

    get numero() {
        return this.#numero;
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta () {
        return this.#aberta
    }

    get temPresente() {
        return this.#temPresente
    }

    get fechada() {
        return !this.#aberta
    }

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada,  this.aberta ) 

    }

    alternarSelecao() {
        const selecionada = !this.selecionada;
        return new PortaModel(this.numero, this.temPresente, selecionada,  this.aberta ) 
     }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta ) 
    }
}