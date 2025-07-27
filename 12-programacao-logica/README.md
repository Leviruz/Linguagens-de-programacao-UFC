# Modelagem de Árvore Genealógica com Programação Lógica em Prolog

## Contexto

A programação lógica oferece uma abordagem única e declarativa para resolver problemas. Em vez de descrever explicitamente os passos para realizar tarefas, a ideia é definir fatos e relações que definem o domínio do problema e deixar que o sistema de inferência descubra as respostas. Prolog é uma das linguagens mais conhecidas que segue esse paradigma, permitindo modelar conhecimento e realizar consultas inteligentes.

Neste projeto, escolhemos representar uma árvore genealógica simples para ilustrar os conceitos fundamentais da programação lógica. Esse tipo de problema é clássico e serve como um excelente exemplo de como podemos modelar relações familiares complexas a partir de informações simples.

## Programação Lógica e Prolog

Em Prolog, o programa consiste em uma coleção de **fatos** e **regras**, que formam a base do conhecimento:

- **Fatos**: São declarações básicas que definem informações precisas, como "João é pai de Maria".

- **Regras**: São inferências que descrevem como novos conhecimentos podem ser derivados a partir dos fatos existentes. Por exemplo, podemos definir que alguém é avô se for pai de um pai.

- **Consultas**: São perguntas feitas ao sistema para obter informações que atendam aos critérios definidos na base de conhecimento.

Não há uma sequência de comandos; o Prolog explora automaticamente as relações para encontrar as respostas.

## Estrutura do Código

O arquivo principal é composto por duas partes fundamentais:

1. **Base de Fatos**: Define os elementos do domínio, como quem é pai ou mãe de quem.

2. **Base de Regras**: Estabelece as relações derivadas, como avô, irmão e outros, usando os fatos como base para inferência.

Essa estrutura facilita a manutenção e ampliação do conhecimento, tornando o código modular e organizado.

## Exemplos de Consultas

- **pai(joao, ana).**  
  Verifica se João é pai de Ana.

- **avo(fernando, maria).**  
  Consulta se Fernando é avô de Maria.

- **irmao(pedro, X).**  
  Busca todos os irmãos de Pedro, retornando os valores para `X`.

Essas consultas demonstram como podemos formular e responder perguntas sem precisar programar explicitamente a busca.

## Exemplo de Código

```prolog
% genealogia.pl
% Pequena genealogia com fatos e regras para parentesco

% fatos: pai(X, Y) significa X é pai de Y
pai(joao, maria).
pai(joao, pedro).
pai(carlos, joao).
pai(carlos, ana).
pai(fernando, carlos).

% fatos: mae(X, Y) significa X é mãe de Y
mae(maria_ana, maria).
mae(maria_ana, pedro).
mae(ana_luiza, joao).
mae(ana_luiza, ana).
mae(sofia, carlos).

% regras

% pai_de(X, Y) verdadeiro se X é pai de Y
pai_de(X, Y) :- pai(X, Y).

% mae_de(X, Y) verdadeiro se X é mãe de Y
mae_de(X, Y) :- mae(X, Y).

% avo_de(X, Y) verdadeiro se X é pai ou mãe do pai ou mãe de Y
avo_de(X, Y) :- pai_de(X, Z), pai_de(Z, Y).
avo_de(X, Y) :- pai_de(X, Z), mae_de(Z, Y).
avo_de(X, Y) :- mae_de(X, Z), pai_de(Z, Y).
avo_de(X, Y) :- mae_de(X, Z), mae_de(Z, Y).

% irmao_de(X, Y) verdadeiro se X e Y compartilham pelo menos um pai ou mãe e são distintos
irmao_de(X, Y) :- pai_de(P, X), pai_de(P, Y), X \= Y.
irmao_de(X, Y) :- mae_de(M, X), mae_de(M, Y), X \= Y.
```
