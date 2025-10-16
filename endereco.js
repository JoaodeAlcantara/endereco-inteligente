const form = document.getElementById('formEndereco');
const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const numeroInput = document.getElementById('numero');
const ufInput = document.getElementById('uf');

cepInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); 
    
    if (value.length > 5) {
        value = value.replace(/(\d{5})(\d{1,3})/, '$1-$2');
    }
    
    e.target.value = value;
});

ufInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
});

numeroInput.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const cepValue = cepInput.value;
    const cepRegex = /^(\d{5})-(\d{3})$/;
    
    if (!cepRegex.test(cepValue)) {
        alert('CEP inválido! O formato correto é 00000-000.');
        cepInput.focus();
        return;
    }

    const logradouroValue = logradouroInput.value.trim();
    
    if (logradouroValue.length < 5) {
        alert('Logradouro inválido! Deve conter no mínimo 5 caracteres.');
        logradouroInput.focus();
        return;
    }

    const numeroValue = numeroInput.value.trim();
    const numeroRegex = /^\d+$/;
    
    if (!numeroRegex.test(numeroValue)) {
        alert('Número inválido! Deve conter apenas dígitos numéricos.');
        numeroInput.focus();
        return;
    }

    const ufValue = ufInput.value.trim();
    const ufRegex = /^[A-Z]{2}$/;
    
    if (!ufRegex.test(ufValue)) {
        alert('UF inválido! Deve conter exatamente 2 letras maiúsculas (ex: SP, RJ, MG).');
        ufInput.focus();
        return;
    }

    alert('Endereço cadastrado com sucesso!');
    
    form.reset();
});
