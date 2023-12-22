function pesquisar () {
    var titulo1 = window.document.querySelector('#titulo1')
    var res = window.document.getElementById('res')
    var titulos = String(titulo1.value)
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(titulos) {
        case 'Copa do Mundo' :
            res.innerHTML = `<br><h1>Copa do Mundo</h1></br> <p> Brasil venceu nos anos: 1958, 1962, 1970, 1994, 2002. </p> `
        img.setAttribute('src', 'imagens/titulos/copa.jpg')
        break;
        case 'Copa das Confederações' :
            res.innerHTML = `<br><h1>Confedera</h1></br> <p> Brasil Venceu nos anos: 1997, 2005, 2009, 2013. </p>`
        img.setAttribute('src', 'imagens/titulos/confedera.jpg')
        break;
        case 'Copa América' :
            res.innerHTML = `</br><h1>Copa América</h1></br> <p> Brasil venceu a Copa América nos anos de: 1919, 1922, 1949, 1989, 1997, 1999, 2004, 2007, 2019.</p>`
        img.setAttribute('src', 'imagens/titulos/Camerica.jpg')
        break;
        

    
    
    
    
    
    
    
    
    
    }







res.appendChild(img)

}