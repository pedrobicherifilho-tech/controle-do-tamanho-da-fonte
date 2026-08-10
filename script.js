// Guarda o tamanho atual da fonte
let tamanho_fonte = 16;


// Localiza os botões pelo ID
const btn_aumentar = document.getElementById("btn_aumentar");
const btn_diminuir = document.getElementById("btn_diminuir");


// Executa uma função quando o botão for clicado
btn_aumentar.addEventListener("click", aumentar_fonte);
btn_diminuir.addEventListener("click", diminuir_fonte);


// Função para aumentar a fonte
function aumentar_fonte() {
    tamanho_fonte = tamanho_fonte + 2;


    // Aplica o novo tamanho na página
    document.documentElement.style.fontSize = tamanho_fonte + "px";
}


// Função para diminuir a fonte
function diminuir_fonte() {
    tamanho_fonte = tamanho_fonte - 2;


    // Evita que a fonte fique muito pequena
    if (tamanho_fonte < 12) {
        tamanho_fonte = 12;
    }


    // Aplica o novo tamanho na página
    document.documentElement.style.fontSize = tamanho_fonte + "px";
}

