const prompt = require("prompt-sync")();
const { criar, atualizar, listar, remover } = require("./modulo.js");

while (true) {
    console.log(`
    1. Para cadastrar um Pet.
    2. Para listar um Pet.
    3. Para atualizar Pet.   
    4. Para remover Pet.
    5. Para sair.`);

    const opcao = Number(prompt("Escolha uma opção acima: "));

    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:
            atualizar();
            break;
        case 4:
            remover();
            break;
        case 5:
            process.exit();
            break;
        default:
            console.log("Opcão invalida");
            break;
    }
}

c