'use strict'

function createElement (index){
    const containerCard = document.createElement('div');
    document.getElementById('container').appendChild(containerCard)
    containerCard.classList.add('card'+[index])
    const paraName = document.createElement("p");
    paraName.innerHTML = team[index].nome;
    document.querySelector(".card"+[index]).appendChild(paraName);
    const paraRole = document.createElement("p");
    paraRole.innerHTML = team[index].ruolo;
    document.querySelector(".card"+[index]).appendChild(paraRole);
    const paraImg = document.createElement("p");
    paraImg.classList.add('img'+[index])
    document.querySelector(".card"+[index]).appendChild(paraImg);
}

const team = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }
    
]
for(let i = 0; i < team.length; i++){
    createElement(i)
    console.log(team[i])
}