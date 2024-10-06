const form = document.getElementById("form-validar");
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);

    mensagemSucesso.innerText = '';
    mensagemErro.innerText = '';
    mensagemSucesso.style.display = 'none';
    mensagemErro.style.display = 'none';

    if (valorCampoB > valorCampoA) {
        mensagemSucesso.innerHTML = `Sucesso! O valor de B (${valorCampoB}) é maior que A (${valorCampoA}).`;
        mensagemSucesso.style.color = "green";
        mensagemSucesso.style.display = 'block';
    } else {
        mensagemErro.innerHTML = `Erro! O valor de B (${valorCampoB}) deve ser maior que A (${valorCampoA}).`;
        mensagemErro.style.color = "red";
        mensagemErro.style.display = 'block';
    }
});
