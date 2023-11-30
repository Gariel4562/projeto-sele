function pesquisar () {
let jogador1 = window.document.querySelector('#jogador1')
let res = window.document.querySelector('#res')
let jogadores = String(jogador1.value)

let img = document.createElement('img')
img.setAttribute('id', 'foto')

switch(jogadores) {
    case 'Pelé' :
    res.innerHTML = `<h1>Pelé</h1> </br> <p> Pelé fez 77 Gols pela Seleção Brasileira, Conquistou três Copas do Mundo pela Seleção Brasileira: 58, 62, 70 (foi protagonista nas copas de 58 e 70.). </p> `
        img.setAttribute('src', 'imagens/jogadores/PeléSele.webp')
        break;

    case 'Garrincha' :
        res.innerHTML = `<h1> Garrincha </h1> <br> <p> Garrincha Conquistou duas Copas do mundo pela Seleção Brasileira 58 e 62, sendo protagonista da copa de 62. Garrincha fez 17 Gols pela seleção, porém possui apenas uma derrota jogando pela seleção em 60 jogos.. foram 52 Vitórias, Sete empates e uma derrota. </p>`
        img.setAttribute('src', 'imagens/jogadores/garrincha.jpg')
        break;

        case 'Ronaldo' :
            res.innerHTML = `<h1>Ronaldo</h1> <br> <p> Ronaldo Conquistou Duas Copas do Mundo pela Seleção Brasileira, foi protagonista da copa de 2002 e ganhou a Copa de 94 como reserva. Ronaldo ainda ganhou Duas Copas Américas e uma Copa das Confederações. Ronaldo fez 62 gols pela Seleção. </p>   `
            img.setAttribute('src', 'imagens/jogadores/Ronaldo.jpg')
            break;

        case 'Romário' :
                res.innerHTML = `<h1>Romário</h1> <br> <p> Romário ganhou a Copa de 94 como protagonista da seleção, e ainda conquistou duas Copas Américas e uma Copa das Confederações. Romário fez 55 Gols pela Seleção. </p>  `
                img.setAttribute('src', 'imagens/jogadores/romário.webp')
                break;

        case 'Rivaldo' :
           res.innerHTML = `<h1>Rivaldo</h1> <br> <p> Rivaldo conquistou a Copa de 2002 de pela Seleção Brasileira, foi um dos protagonistas ao lado de Ronaldo na conquista. Rivaldo ainda conquistou 1 Copa América e uma uma Copa das confederações pela Seleção Brasileira. Rivaldo fez 37 Gols pela Seleção.         `
           img.setAttribute('src', 'imagens/jogadores/rivaldo.jpg')
           break;
                                    
                        
    




}








res.appendChild(img)

}
