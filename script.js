// 1. MODO ALTO CONTRASTE
const botaoContraste = document.getElementById("btn-contraste");

if (botaoContraste) {
    botaoContraste.onclick = function() {
        document.body.classList.toggle("alto-contraste");

        // Gerencia a troca de texto do botão
        if (document.body.classList.contains("alto-contraste")) {
            botaoContraste.textContent = "Modo Normal";
        } else {
            botaoContraste.textContent = "Alto Contraste";
        }
    };
}

// 2. NAVEGAÇÃO ENTRE PÁGINAS (ABAS)
function mostrarPagina(idPagina) {
    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });

    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add("ativa");
    } else {
        console.error("Erro: A página com o ID '" + idPagina + "' não foi encontrada.");
    }
}