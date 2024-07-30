const prompt = require("prompt-sync")();

const produtos = [];

const validarIndice = (indice) => indice >= 0 && indice < produtos.length;
const modelo = () => {
    const nome = prompt("Qual o produto a ser cadastrado?");
    const valor = prompt("Qual o preço do produto?");

    if (nome != "" && valor != "") {
        return {
            nome,
            valor,
        };
    } else {
        console.log("não foi possivel cadastrar o produto");
        return;
    }
};

const criar = () => {
    const produto = modelo();
    if ((produto = undefined)) {
        produtos.push(produto);
        console.log("produto cadastrado com sucesso");
    }
};

const listar = () => {
    if (produto.length == 0) {
        console.log("nenhum produto cadastado");
        return false;
    } else {
        produtos.forEach((produto, indice) => {
            console.log(`
            ${indice + 1}. 
            Nome: ${produto.nome}
            Preço: $ ${produto.valor}
            `);
        });
        return true;
    }
};

const atualizar = () => {
    if (!listar()) {
        return;
    }
    const indice = prompt(`Qual o produto que deseja atualizar?: `) - 1;
    const produto = modelo(indice);
    if (produto != undefined && validarIndice(indice)) {
        produtos[indice] = produto;
        console.log("produto atualizado com sucesso");
    } else {
        console.log("falha na atualização");
    }
};

const remover = () => {
    if (!listar()) {
        return;
    }
    const indice = prompt(`Qual o produto que deseja remover?: `) - 1;

    if (validarIndice(indice)) {
        produtos.splice(indice, 1);
        console.log("produto removido com sucesso");
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
