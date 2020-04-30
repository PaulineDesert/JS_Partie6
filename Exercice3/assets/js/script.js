let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

languages.forEach(function(element){
    let myP = document.createElement('p');
    lng.appendChild(myP);
    myP.innerText =`${element}`
})

// languages.forEach(element => document.write(`${element} <br/>`))