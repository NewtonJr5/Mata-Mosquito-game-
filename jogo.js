var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel == 'Normal'){

    criaMoscaTempo = 1500

} else if(nivel == 'Dificil'){

    criaMoscaTempo = 1000

} else if(nivel == 'Deus_grego'){

    criaMoscaTempo = 750

} 

function ajustaTamanho(){

    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura)
    //console.log(largura)
}

ajustaTamanho()

var cronometro = setInterval(function() {

    tempo-=1

    if(tempo < 0){

        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'

    } else {

        document.getElementById('cronometro').innerHTML = tempo
        
    }
},1000)


function posicaorandomica(){

    //remover o mosquito anterior
    if(document.getElementById('mosquito')){

        document.getElementById('mosquito').remove()

        if(vidas > 3){

            window.location.href = 'fim_de_jogo.html'

        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }
    }
    
    var posicaoX = Math.floor(Math.random() * largura - 90)
    var posicaoY = Math.floor(Math.random() * altura - 90)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criando elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoaleatorio() + ladoleatorio ()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function tamanhoaleatorio () {
    
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }
        
}

function ladoleatorio () {

    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return ' ladoA'
        case 1:
            return ' ladoB'

    }
        
}