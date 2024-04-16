function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
        if (fano.value.length == 0 || Number(fano.value > ano)) {
            alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number (fano.value) // calular a idade
            var img = document.createElement('img')
            img.setAttribute('id','foto')

             //res.innerHTML = `Idade calculada ${idade}` 
             var gênero = ''
                if (fsex [0].checked) {
                    gênero ='Homem'
                        if (idade >= && idade < 10) {
                            //Criança
                            img.setAttribute('src', 'foto-crança.png')
                        } else if (idade < 21) {
                            // Jovem
                        } else if (idade < 50) {
                            //Adulto
                        } else
                            //Idoso 

                } else if (fsex [1]) {
                    gênero ='Mulher'
                }
                res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`
        }
}