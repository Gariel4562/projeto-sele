function pesquisar () {
    let time1 = window.document.getElementById('time1')
    let res = window.document.getElementById('res')
    let times = String(time1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(times) {
        case 'Seleção58-62' :
            res.innerHTML = "<h1>Seleção de 58 - 62</h1> <p> Em pé: Vicente Feola (técnico), Djalma Santos, Zito, Bellini, Nilton Santos, Orlando e Gylmar. Agachados: Garrincha, Didi, Pelé, Vavá, Zagallo e Paulo Amaral (Preparador fisico). Grandes Feitos: Foi a única seleção na história a ser Bicampeã do mundo 58 - 62. </p>   " 
            img.setAttribute('src', 'imagens/times/seleção58-62.webp')
            break;
        case 'Seleção70' :
          res.innerHTML = "<h1>Seleção de 70 </h1>   <p>Em Pé: Carlos Alberto Torres, Félix, Piazza, Brito, Clodoaldo, Everaldo e Admildo Chirol (preparador fisico). Agachados: Mária Américo(massagista), Jairzinho, Gérson, Tostão, Pelé, Rivellino e Nocaute Jack (Massagista). Grande Feito: Campeã do Mundo em 1970, Tricampeão do mundo e conquistou a posse definitiva da Taça Jules Rimet ao Brasil. o Técnico da Seleção foi Zagallo.</p>  "
          img.setAttribute('src', 'imagens/times/seleção70.jpg')
          break;
        case 'Seleção94' :
            res.innerHTML = "<h1>Seleção de 94</h1> <p> Em pé: Taffarel, Jorginho, Aldair, Mauro Silva, Márcio Santos e Branco. Agachados: Mazinho, Romário, Dunga, Bebeto e Zinho. Grandes feitos: Campeã do Mundo em 1994. Trouxe de volta a Copa depois de 24 anos de jejum. </p>   " 
            img.setAttribute('src', 'imagens/times/seleção94.webp')
            break;
            case 'Seleção2002' :
                res.innerHTML = "<h1>Seleção de 2002</h1> <p> Em pé: Lúcio, Edmilson, Roque Júnior, Gilberto Silva, Marcos, Kaká, Vampera, Anderson Polga, Dida, Rogério Ceni e Belletti. Agachados: Ronaldinho, Ronaldo, Roberto Carlos, Kleberson, Rivaldo, Cafu, Júnior, Ricardinho, Luizão, Edilson, Denilson e Juninho Paulista. Grandes Feitos: Campeã da Copa do mundo de 2002. Fez do Brasil o primeiro pentacampeão mundial. </p> " 
                img.setAttribute('src', 'imagens/times/seleção2002.jpg')
                break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }

    res.style.lineHeight = `30px`
    