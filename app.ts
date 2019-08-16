class Aluno {
 
    constructor(public nome: string){}
    
    exibir(){
        console.log("Nome:" +this.nome)
    }
}

let papai = new Aluno("Cade meu pai?")

papai.exibir()


