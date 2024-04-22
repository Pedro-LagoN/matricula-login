function matricular(){
    let nome= document.getElementById('nome')
    let idade= document.getElementById('id')
    let idade2= Number(idade.value)
    let carteira= document.getElementById('carteirinha')
    let estudy= document.getElementById("estudy")

    carteira.style.display='block'
    carteira.style.display='flex'
    estudy.innerHTML=`aluno(a): ${nome.value} </br>`
    estudy.innerHTML+=`idade: ${idade2}</br>`
    if(idade2>=18){
        estudy.innerHTML+='turno: noturno'
    }else if(idade2<18 && idade2>=12){
        estudy.innerHTML+='turno: vespertino'
    }else if(idade2<12 && idade2>0){
        estudy.innerHTML+='turno: matutino'
    }
    else{
        alert('ERRO')
        carteira.style.display='none'
    }
}