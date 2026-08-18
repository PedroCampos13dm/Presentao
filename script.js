/* =========================
   TROCAR DE TELA
========================= */

function irPara(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.remove("ativa");
    });

    const proximaTela = document.getElementById(id);

    if (proximaTela) {
        proximaTela.classList.add("ativa");
    }

    window.scrollTo(0, 0);
}


/* =========================
   PERGUNTA 1
========================= */

function verificarPergunta1() {

    const campo = document.getElementById("resposta1");
    const mensagem = document.getElementById("mensagem1");
    const responder = document.getElementById("responder1");
    const continuar = document.getElementById("continuar1");

    const resposta = campo.value.trim().toLowerCase();

    if (resposta === "pedro") {

        mensagem.textContent =
            "Se você diz... Não vou negar. Obrigado!";

        mensagem.className =
            "mensagem acerto";

        /* Remove completamente o botão RESPONDER */
        responder.remove();

        /* Mostra CONTINUAR */
        continuar.style.display = "inline-block";

    } else {

        mensagem.textContent = "ERRADO";
        mensagem.className = "mensagem erro";

        setTimeout(() => {

            campo.value = "";
            mensagem.textContent = "";
            mensagem.className = "mensagem";

            campo.focus();

        }, 800);
    }
}


/* =========================
   PERGUNTA 2
========================= */

function verificarPergunta2() {

    const campo = document.getElementById("resposta2");
    const mensagem = document.getElementById("mensagem2");
    const responder = document.getElementById("responder2");
    const continuar = document.getElementById("continuar2");

    const resposta = campo.value.trim();

    if (resposta === "33") {

        mensagem.textContent =
            "CORRETO!";

        mensagem.className =
            "mensagem acerto";

        /* Remove completamente o botão RESPONDER */
        responder.remove();

        /* Mostra PRÓXIMA PERGUNTA */
        continuar.style.display = "inline-block";

    } else {

        mensagem.textContent = "ERRADO";
        mensagem.className = "mensagem erro";

        setTimeout(() => {

            campo.value = "";
            mensagem.textContent = "";
            mensagem.className = "mensagem";

            campo.focus();

        }, 800);
    }
}


/* =========================
   PERGUNTA 3
========================= */

function verificarPergunta3() {

    const campo = document.getElementById("resposta3");
    const mensagem = document.getElementById("mensagem3");

    const resposta =
        campo.value.trim().toLowerCase();

    if (resposta === "abreus") {

        irPara("tela6");

    } else {

        mensagem.textContent = "ERRADO";
        mensagem.className = "mensagem erro";

        setTimeout(() => {

            campo.value = "";
            mensagem.textContent = "";
            mensagem.className = "mensagem";

            campo.focus();

        }, 800);
    }
}


/* =========================
   ABRIR O PRESENTE
========================= */

function abrirPresente() {

    irPara("tela9");
}
