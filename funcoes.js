function MostrarAlerta{
  alert ("Deu certo");
}



class jogador {
nome;
posicao;
dt_nascimento;
nacionalidade;
altura;
peso;

constructor(nome,posicao,dt_nascimento,nacionalidade,altura,peso){
  this.nome = nome;
  this.posicao = posicao;
  this.dt_nascimento = dt_nascimento;
  this.nacionalidade = nacionalidade;
  this.altura = altura;
  this.peso = peso;
}

setNome(novo_nome){
  this.nome = novo_nome;
}

getNome(){
  return this.nome;
}

getCalculaIdade(){
var ano = this.dt_nascimento[6]+this.dt_nascimento[7]+this.dt_nascimento[8]+this.dt_nascimento[9];
var idade = (2022 - ano)
console.log (idade)

}

}

var player = new jogador('Leite','volante','20/12/1989','Brasileiro',1.69,70);

console.log (player)
//Alteração do local
