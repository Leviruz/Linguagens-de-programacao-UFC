# Sistema de Gerenciamento de Convidados

## Visão Geral

Este projeto propõe a implementação de um sistema interativo para controle de convidados em eventos sociais. O objetivo é permitir que o usuário possa registrar nomes, visualizar a lista atual de convidados e encerrar o sistema de maneira segura.

A atividade serve como prática fundamental para o uso de estruturas de decisão (`if`), repetição (`while`), manipulação de listas e validações condicionais.

---

## Funcionalidades

### Menu Dinâmico

O programa apresenta um menu com as seguintes opções:

1. Registrar novo convidado  
2. Exibir lista de convidados  
3. Encerrar o sistema

### Validações Durante o Cadastro

- Solicita o nome do convidado.  
- Impede o registro de nomes em branco.  
- Evita a duplicação de nomes na lista.

### Apresentação da Lista

- Exibe os convidados cadastrados com numeração sequencial.  
- Caso a lista esteja vazia, uma mensagem apropriada é mostrada.

### Saída Controlada

- O programa só finaliza após a escolha da opção `3` no menu.

---

## Demonstração

```plaintext
Bem-vindo ao sistema de gerenciamento de convidados!

Escolha uma opção:
1 - Registrar novo convidado
2 - Exibir lista de convidados
3 - Encerrar
Digite o número correspondente: 1
Digite o nome do convidado: João
João registrado com sucesso!

Escolha uma opção:
1 - Registrar novo convidado
2 - Exibir lista de convidados
3 - Encerrar
Digite o número correspondente: 2

Lista de convidados:
1. João
```

---

## Instruções de Execução

1. Salve o script com o nome `gerenciarConvidados.js`.
2. Execute o script utilizando Node.js com o seguinte comando:

```bash
node gerenciarConvidados.js
```

---
