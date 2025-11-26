/*exemplo 1*/

function exibir(){
   alert("Manipulação direta do evento!") 
}
/*exemplo 2 */
function exibir_anonima(){
    let botao= document.getElementById("btn1")
    botao.addEventListener("click",function(){ alert("A função anonima é uma função sem nome ex: function(){...}. Pode ser chamada de função anonima, callback, Função de evento (event handler)")})

}
 function exibir_nominada(){
    let botao=document.getElementById("btn2")
    botao.addEventListener("click", exibir)

 }

 function exibir_flecha(){
    let botao=document.getElementById("btn3")
    botao.addEventListener("click", ()=> {alert("A função arrow é dada por ()=> {...}")})

 }

/*exemplo 3 ativando o evento com a passagem do mouse  */

function mudar_cor()
{
    var mouse = document.getElementById("mouse")

    mouse.addEventListener("mouseover", function() {mouse.style.color="black"

        mouse.innerText="Passe o mouse aqui!"
    })

    mouse.addEventListener("mouseout", function(){
        mouse.style.color="blue" 
        mouse.innerText="evento com o mouse"})
    }



    /*As funçoes devem ser cha,adas para ativar o listener assim que a pagina carregar */
    exibir_anonima()
    exibir_nominada()
    exibir_flecha()
    mudar_cor()
