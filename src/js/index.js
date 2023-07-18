const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter',() => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0,behavior:'smooth'});
        }
 
        const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem); 

      AlterarNomePersonagemSelecionado(personagem);

      AlterarDescricaoPersonagem(personagem);
    })
})

function AlterarDescricaoPersonagem(personagem) {
    const descricaopersonagem = document.getElementById('descricao-personagem');
    descricaopersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomePersonagemSelecionado(personagem) {
    const nomepersonagem = document.getElementById('nome-personagem');

    nomepersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagempersonagemgrande = document.querySelector('.personagem-grande');

    const idpersonagem = personagem.attributes.id.value;

    imagempersonagemgrande.src = `./src/imagens/card-${idpersonagem}.png`;
}
 