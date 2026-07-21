class Hero {
    constructor(name, idade, tipo) {
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar(heroi) {
        let ataque = ''
        if (this.tipo === "mago") {
            ataque = "bola de fogo";
        }else if (this.tipo === "guerreiro") {
            ataque = "espada";
        }else if (this.tipo === "monge") {
            ataque = "punhos";
        }else if (this.tipo === "ninja") {
            ataque = "shurikens";
        }
    return `${this.name} atacou com ${ataque}`;
    }
}
let heroi = new Hero("Lúcio", 25, "guerreiro");
console.log(heroi.atacar())