const pergunta = document.querySelectorAll('dt')


function ativaItem(e){
   this.nextElementSibling.classList.toggle('ativo');
}


pergunta.forEach((item)=>{
    item.addEventListener('click',ativaItem)
})



