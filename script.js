/* =========================
   TROCAR DE TELA
========================= */

function irPara(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.remove("ativa");
    });

    const proximaTela =
        document.getElementById(id);

    proximaTela.classList.add("ativa");

    window.scrollTo(0, 0);
}


/* =========================
   PERGUNTA 1
========================= */

function verificarPergunta1() {

    const resposta =
        document
            .getElementById("resposta1")
            .value
            .trim()
            .toLowerCase();


    const mensagem =
        document.getElementById("mensagem1");


    const continuar =
        document.getElementById("continuar1");


    if (resposta === "pedro") {

        mensagem.textContent =
            "Se você diz... Não vou negar. Obrigado!";


        mensagem.className =
            "mensagem acerto";


        continuar.style.display =
            "inline-block";

    } else {

        mensagem.textContent =
            "Deixe de ser burra, é tão fácil!";


        mensagem.className =
            "mensagem erro";


        continuar.style.display =
            "none";
    }
}


/* =========================
   PERGUNTA 2
========================= */

function verificarPergunta2() {

    const resposta =
        document
            .getElementById("resposta2")
            .value;


    const mensagem =
        document.getElementById("mensagem2");


    const continuar =
        document.getElementById("continuar2");


    if (resposta === "33") {

        mensagem.textContent =
            "CORRETO!";


        mensagem.className =
            "mensagem acerto";


        continuar.style.display =
            "inline-block";

    } else {

        mensagem.textContent =
            "ERRADO";


        mensagem.className =
            "mensagem erro";


        continuar.style.display =
            "none";
    }
}


/* =========================
   PERGUNTA 3
========================= */

function verificarPergunta3() {

    const resposta =
        document
            .getElementById("resposta3")
            .value
            .trim()
            .toLowerCase();


    const mensagem =
        document.getElementById("mensagem3");


    if (resposta === "abreus") {

        irPara("tela6");

    } else {

        mensagem.textContent =
            "ERRADO";


        mensagem.className =
            "mensagem erro";
    }
}


/* =========================
   ABRIR O PRESENTE
========================= */

function abrirPresente() {

    irPara("tela9");
}
