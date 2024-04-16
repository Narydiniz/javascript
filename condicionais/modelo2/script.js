function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src ='foto-amanhecer.png'
        document.body.style.background = '#181008'
        document.getElementsByClassName('texto')[0].style.color = 'white'
        document.getElementsByClassName('texto')[1].style.color = 'white'
        document.getElementsByClassName('msg').style.background = 'black'
       

    } else if (hora >= 12 && hora <=18) {
        //Boa tarde!
        img.src ='foto-entardecer.png'
        document.body.style.background = '#e64f00'
    } else {
        //Boa noite!
        img.src ='foto-anoitecer.png'
        document.body.style.background = '#09456d'
    }
}