const botoes = document.querySelectorAll(".botao");

for (let i=0;i <botoes.length; i++){
botões [i]. onclick=function(){

for(letj-0; j<botões.length;j++){
    botões[j].classlist.remove ("ativo");
}

    botões[i].classlist.add("ativo");
}
}