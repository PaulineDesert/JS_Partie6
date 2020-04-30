let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(function(element){
    let myP = document.createElement('p');
    day.appendChild(myP);
    myP.innerText =`${element}`;

    if (element === 'Samedi' || element === 'Dimanche') {
        myP.className = 'bold';
    } 
})