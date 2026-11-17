// Dia 3 - Mural da equipe
// O HTML já carrega este arquivo. Salve e recarregue a página a cada teste.

// 1. Teste a conexão com uma mensagem no Console usando console.log.

// 2. Encontre o título pelo id titulo-aviso e guarde em uma variável.
// Teste a troca de seu texto ao carregar a página.

// 3. Encontre o botão pelo id botao-aviso.
// Mova a troca de texto para dentro da função mostrarAviso.
// Ligue o evento click à função.
// Ao avançar, substitua a etapa anterior e evite repetir as variáveis.

// 4. Encontre a descrição pelo id descricao-aviso.
// Crie um objeto aviso com as propriedades titulo e descricao.
// Coloque os textos escolhidos pela equipe nesse objeto.

// 5. Atualize a função para mostrar os dois valores do objeto.
// Mantenha uma única função mostrarAviso e uma linha de addEventListener.

// 6. Teste antes e depois do clique. Mude um texto no objeto e teste de novo.
// Cada integrante deve explicar uma parte do código.

const titulo = document.querySelector("#titulo-aviso");
const botao = document.querySelector("#botao-aviso");
const descricao = document.querySelector("#descricao-aviso");

function mostrarAviso() {
    titulo.textContent = aviso.titulo;
    descricao.textContent = aviso.descricao;
}
botao.addEventListener("click", mostrarAviso);

const aviso = {
    titulo: "Oficina de JavaScript",
    descricao: "Traga seu projeto para a pratica"
};