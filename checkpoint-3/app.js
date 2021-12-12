function Aluno(nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.faltas = quantidadeFaltas;
    this.notas = notas;
    this.faltas = function (){
        this.quantidadeFaltas += 1;
    }
    this.calcularMedia = function(){
        for(let i=0; i<this.notas.length; i++)
        soma += this.notas[i];
    }
    return soma / this.notas.length
}

let curso = require('./curso');