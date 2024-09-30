document.getElementById('numero-contato').addEventListener('input', function(event) {
    let telefone = event.target.value;

    // Remove todos os caracteres não numéricos
    telefone = telefone.replace(/\D/g, '');

    // Aplica a máscara (xx) x xxxx-xxxx
    telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, "($1) $2 $3-$4");

    // Atualiza o campo com o valor formatado
    event.target.value = telefone;
})

document.getElementById('form-contatos').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Pega os valores dos inputs
    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('numero-contato').value

    // Cria uma nova linha na tabela
    const novaLinha = document.createElement('tr')

    // Cria as colunas de nome e telefone
    const colunaNome = document.createElement('td')
    const colunaTelefone = document.createElement('td')

    // Insere os valores nas colunas
    colunaNome.textContent = nome
    colunaTelefone.textContent = telefone

    // Adiciona as colunas na linha
    novaLinha.appendChild(colunaNome)
    novaLinha.appendChild(colunaTelefone)

    // Insere a nova linha na tabela
    document.querySelector('table tbody').appendChild(novaLinha)

    // Exibe o alerta de contato salvo
    alert('Contato salvo com sucesso!')

    // Limpa os campos do formulário após o envio
    document.getElementById('nome').value = ''
    document.getElementById('numero-contato').value = ''
})
