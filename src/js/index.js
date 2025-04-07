
/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado
      // passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles 
            const botoes = document.querySelectorAll('.botao') /*Poderiamos pegar pelos ids e colocar tudo em uma variavel especifica para cada botão, mas usando o ALL fica mais fácil, ele vai pegar todos os elementos que tenham a classse botao*/ 
            const personagens = document.querySelectorAll('.personagem') /*Pego todos os personagens que estão na tela, para depois poder esconder e mostrar eles*/

      //  passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
            botoes.forEach((botao, indice) => { /*Para cada item eu vou fazer algo*/
                       botao.addEventListener('click', () =>{

                        // passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
                        const botaoSelecionado = document.querySelector('.botao.selecionado')   /*Pego o botão que já está selecionado*/
                        botaoSelecionado.classList.remove('selecionado') /*Removo a classe selecionado do botão que já estava selecionado*/

                        botao.classList.add('selecionado') /*Adiciona a classe selecionado no botão que o usuário clicou*/

                        
                        const personagemSelecionado = document.querySelector('.personagem.selecionado') /*Pego o personagem que já está selecionado*/
                        personagemSelecionado.classList.remove('selecionado') /*Removo a classe selecionado do personagem que já estava selecionado*/
                       personagens[indice].classList.add("selecionado") /*Adiciona a classe selecionado no personagem que o usuário clicou*/
                        
                       })
            })
      

         
                

