function pesquisar () {
    let recorde1 = window.document.getElementById('recorde1')
    let res = window.document.getElementById('res')
    let recordes = String(recorde1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(recordes) {
        case 'Pentacampeao' :
          res.innerHTML = "<h1>Único Pentacampeão do Mundo</h1> <p> A Seleção Brasileira é a única Pentacampeã do mundo nos anos de 58, 62, 70, 94, 2002. </p> "
          img.setAttribute('src', 'imagens/recordes/penta.jpg')
          break;
        case 'TodasAsCopas' :
            res.innerHTML = "<h1>Esteve em todas as copas..</h1> <p> A seleção Brasileira é a única seleção que esteve em todas as copas do mundo. </p>  " 
            img.setAttribute('src', 'imagens/recordes/unicaSeleção.webp')
            break;
        case 'Bicampeao' :
            res.innerHTML = "<h1>Único Bicampeão do mundo 58/62</h1> <p> A seleção Brasileira é a única seleção Bicampeã do mundo nos anos de 58 e 62. </p>" 
            img.setAttribute('src', 'imagens/recordes/bicampeã.webp')
            break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }

    