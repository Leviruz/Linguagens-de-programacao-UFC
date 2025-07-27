const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let convidados = [];

console.log("Bem-vindo ao sistema de cadastro de convidados!");

function exibirMenu() {
  console.log("\nEscolha uma opção:");
  console.log("1 - Adicionar convidado");
  console.log("2 - Listar convidados");
  console.log("3 - Sair");

  rl.question("Digite o número da opção desejada: ", (escolha) => {
    switch (escolha) {
      case "1":
        rl.question("Digite o nome do convidado: ", (nome) => {
          nome = nome.trim();
          if (!nome) {
            console.log("Nome inválido! Tente novamente.");
            exibirMenu();
          } else if (convidados.includes(nome)) {
            console.log(`${nome} já está na lista de convidados.`);
            exibirMenu();
          } else {
            convidados.push(nome);
            console.log(`${nome} adicionado(a) com sucesso!`);
            exibirMenu();
          }
        });
        break;
      case "2":
        if (convidados.length > 0) {
          console.log("\nLista de convidados:");
          convidados.forEach((convidado, index) => {
            console.log(`${index + 1}. ${convidado}`);
          });
        } else {
          console.log("Nenhum convidado cadastrado ainda.");
        }
        exibirMenu();
        break;
      case "3":
        console.log("Encerrando o sistema. Até mais!");
        rl.close();
        break;
      default:
        console.log("Opção inválida! Por favor, escolha uma opção válida.");
        exibirMenu();
    }
  });
}

exibirMenu();
