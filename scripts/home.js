// function abrir(){
//     alert('Bem-Vindo ao Love Rock! Melhor conteúdo de metal!' )
// }

var altFundo = document.getElementById('muda-fundo')




function mudaFundo(){
    altFundo.innerHTML = '<h1>Love Rock uma paixão para vida!</h1>   <p> Um site para demonstrar minha paixão pela música, especificamente pelo Heavy Metal geral.</p><p> Não sou especialista, mas tenho uma grande conhecimento de bandas e uma vivência muito grande em shows.</p>'
    altFundo.style.opacity = '1'
}

function voltaF(){
    altFundo.innerHTML = ''
    altFundo.style.opacity = '0'
}

