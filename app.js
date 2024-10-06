let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;  

}


function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um jogo da franquia ou personagem.</p>"
      return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = ""; 
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // cria um novo elemento
          resultados += `
           <div class="item-resultado">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <img src="${dado.imagem}" alt="${dado.titulo}">
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
      `;
      }

      const slider = document.querySelector('.slider');
      slider.style.display = 'none';

  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
      slider.style.display = 'block';
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
