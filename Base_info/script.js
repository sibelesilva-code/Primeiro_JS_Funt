const titulo = document.querySelector("#titulo-reuniao");
const botao = document.querySelector("#botao-reuniao");
const descricao = document.querySelector("#descricao-reuniao");

function mostrarReuniao() {
    titulo.textContent = reuniao.titulo;
    descricao.textContent = reuniao.descricao;
}   

botao.addEventListener("click", mostrarReuniao);

const reuniao = {
    titulo: "Reunião de Equipe",
    descricao: "Vamos discutir sobre a nossa reunião de equipe e os próximos passos do projeto."
};
