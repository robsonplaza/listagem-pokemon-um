/*
  O que precisamos fazer? - quando clicarmos  no botão de troca de tema temos que  aletrar a cor do tema  da página para as cores do tema claro ou do tema escuro

    - Objetivo 1 - quando clicar no botão de troca de tema , adicionar a classe modo-escuro no body pra que os estilos do modo-escuro sejam aplicados e mudar a imagem pra lua
       - passo 1 - pegar JS e elemento HTML correspondendte ao botão de troca de tema 
       - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
       - passo 3 - dar um jeito de identificar o clique do usário no botão de troca de tema
       - passo 4 - adicionar classe nidi-escuro  no body
       - passo 5 - trocar a imagem do botão de alterar tema para lua
       
    - Objetivo 2 - quando clicar no botão troca de tema, caso o body já tenha classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
       - passo 6 - verificar se o body tem o modo-escuro
       - passo 7 - remover o modo-escuro se já tiver a classe no body
       - passo 8 - trocar a imagem do botão alterar tema pra sol
*/

// O que precisamos fazer? - quando clicarmos  no botão de troca de tema temos que  aletrar a cor do tema  da página para as cores do tema claro ou do tema escuro
     
const botaoAlerarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlerarTema.addEventListener("click", () => {
        
   const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

   body.classList.toggle("modo-escuro")
   if (modoEscuroEstaAtivo) {

     imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

   } else { 
  
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    } 
});
 












