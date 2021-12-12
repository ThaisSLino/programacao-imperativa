module.exports = {
    curso{
        nomeCurso: "CTD",
        notaAprovacao: 7,
        faltasMaxima: 10,
        listaEstudantes:[]
        novoEstudante: function(estudante){
            this.listaEstudantes.push(estudante);
        },
        notaFinal: function(aluno){
            if (aluno.quantidadeFaltas < this.faltasMaxima && aluno.calularMedia() > this.notaAprovacao){
            resultado true;  
        }
            else if (aluno.quantidadeFaltas === this.faltasMaxima && aluno.calularMedia() > (this.notaAprovacao * 1,1)){
            resultado true;
        }
            else {
            resultado false;
        }
        listaAprovados: function (){
            let aprovados = []
            for (let i=0; i < this.listaEstudantes.length; i++)
            aprovados.push(this.notaFinal(this.listaEstudantes[i]));
        }
    }  
}
