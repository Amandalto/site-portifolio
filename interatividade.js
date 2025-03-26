document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const botao = document.getElementById("enviar");

    // Validação do formulário ao submeter
    form.addEventListener("submit", function (event) {
        let valido = true;

        // Verifica se o campo Nome está vazio
        if (nome.value.trim() === "") {
            alert("O campo Nome não pode estar vazio.");
            nome.style.border = "2px solid red";
            valido = false;
        }

        // Verifica se o campo Email é válido
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            alert("Por favor, insira um e-mail válido.");
            email.style.border = "2px solid red";
            valido = false;
        }

        // Verifica se o campo Mensagem está vazio
        if (mensagem.value.trim() === "") {
            alert("O campo Mensagem não pode estar vazio.");
            mensagem.style.border = "2px solid red";
            valido = false;
        }

        // Impede o envio do formulário caso algum campo esteja inválido
        if (!valido) {
            event.preventDefault();
        }
    });

    // Efeito interativo no botão de enviar
    botao.addEventListener("mouseover", function () {
        botao.style.backgroundColor = "#007bff";
        botao.style.transform = "scale(1.05)";
        botao.style.transition = "0.3s";
    });

    botao.addEventListener("mouseout", function () {
        botao.style.backgroundColor = "";
        botao.style.transform = "scale(1)";
    });

});
