import { produtos } from './service.js'

const form = document.querySelector("#form-cadastro");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let novoProduto = {
        nome: form.nome.value,
        quantidade: form.quantidade.value,
        valor: form.valor.value
    }
    console.log(novoProduto)
    produtos.add(novoProduto).then((docRef) => {
        form.reset()
        alert(`Cadastro do produto ${novoProduto.nome} ocorreu com sucesso!`)
    })
    .catch((error) => {
        alert(`Cadastro do produto ${novoProduto.nome} não pode ser concluido!`)
        console.log('Error adding document')
    })
})