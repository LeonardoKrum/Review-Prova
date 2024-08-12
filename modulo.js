const prompt = require("prompt-sync")();

const produtos = [];

const validarIndice = (indice) => indice >= 0 && indice < produto.length;
const modelo = () => {
    const raçaPet = prompt("Adicione a raça do seu Pet? ");
    const nomePet = prompt("Qual o nome do seu Pet? ");
    const pesoPet = Number(prompt("Qual seria o peso do seu Pet?"));
    const servico = prompt("Qual serviço gostaria de realizar no seu Pet?");

    if (raçaPet != "" && nomePet != "" && pesoPet != "" && servico != "") {
        return {
            raçaPet,
            nomePet,
            pesoPet,
            servico,
        };
    } else {
        console.log("Não foi possivel efetuar o cadastro do seu Pet.");
        return;
    }
};

const criar = () => {
    const produto = modelo();
    if (produto !== undefined) {
        produtos.push(produto);
        console.log("Seu Pet foi cadastrado com sucesso!");
    }
};

const listar = () => {
    if (produto.length === 0) {
        console.log("Nenhum Pet cadastado");
        return false;
    } else {
        produtos.forEach((produto, indice) => {
            console.log(`
            ${indice + 1}. 
            Raça: ${produto.raçaPet}
            Nome: ${produto.nomePet}
            Peso: ${produto.pesoPet}
            Serviço: ${produto.servico}
            `);
        });
        return true;
    }
};

const atualizar = () => {
    if (!listar()) {
        return;
    }
    const indice = prompt(`Qual Pet vc gostaria de atualizar? `) - 1;
    const produto = modelo(indice);
    if (produto != undefined && validarIndice(indice)) {
        produtos[indice] = produto;
        console.log("Pet atualizado com sucesso");
    } else {
        console.log("falha na atualização");
    }
};

const remover = () => {
    if (!listar()) {
        return;
    }
    const indice = prompt(`Qual o Pet você deseja remover?: `) - 1;

    if (validarIndice(indice)) {
        produtos.splice(indice, 1);
        console.log("Pet removido com sucesso");
    } else {
        console.log("falha na remoção");
    }
};

module.exports = {
    criar,
    atualizar,
    listar,
    remover,
};
