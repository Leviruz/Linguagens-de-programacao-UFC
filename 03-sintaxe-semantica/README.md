# Desafio 03 - Sintaxe e Semântica

Este desafio propõe a criação de uma **mini-gramática inventada**, acompanhada de exemplos de **análise léxica** e **análise sintática**. A proposta é entender os fundamentos teóricos das linguagens de programação, como **tokens**, **gramáticas formais**, **análise léxica**, **parsing** e **semântica estrutural**.

---

## Linguagem: **CT**

A linguagem fictícia **CT** foi criada com uma sintaxe simplificada, voltada para operações aritméticas básicas e controle condicional. A ideia é simular uma linguagem mínima, semelhante ao pseudocódigo, mas com regras formais bem definidas.

---

## Análise Léxica

A análise léxica é o processo de **dividir o código-fonte em unidades léxicas válidas**, conhecidas como tokens.

### Tokens da Linguagem CT:

| Tipo    | Padrão (Regex simplificado) | Exemplos     |
| ------- | --------------------------- | ------------ | --- | --- | --- | --- | ---------- |
| NUM     | `[0-9]+`                    | `42`         |
| ID      | `[a-zA-Z_][a-zA-Z0-9_]*`    | `x`, `total` |
| OP_ARIT | `[\+\-\*/]`                 | `+`, `*`     |
| OP_REL  | `==                         | !=           | >   | <   | >=  | <=` | `!=`, `<=` |
| ATRIB   | `=`                         | `=`          |
| IF      | `if`                        | `if`         |
| THEN    | `then`                      | `then`       |
| END     | `end`                       | `end`        |
| PRINT   | `print`                     | `print`      |
| ( , )   | Parênteses                  | `(`, `)`     |
| ;       | Ponto e vírgula             | `;`          |

---

## Gramática EBNF da Linguagem CT

A seguir, a definição da gramática da linguagem CT usando **EBNF (Extended Backus-Naur Form)**:

```ebnf
<programa>      ::= { <instrucao> }

<instrucao>     ::= <atribuicao> ";"
                  | <print_instr> ";"
                  | <condicional>

<atribuicao>    ::= ID "=" <expr>

<print_instr>   ::= "print" "(" <expr> ")"

<condicional>   ::= "if" <expr_rel> "then" { <instrucao> } "end"

<expr_rel>      ::= <expr> OP_REL <expr>

<expr>          ::= <termo> { ("+" | "-") <termo> }

<termo>         ::= <fator> { ("*" | "/") <fator> }

<fator>         ::= NUM
                  | ID
                  | "(" <expr> ")"
```

---

## Semântica

### Semântica Estática

- Todas as variáveis armazenam valores inteiros.
- Nenhuma variável pode ser usada sem ter sido previamente atribuída.
- Apenas valores numéricos são aceitos em operações aritméticas e relacionais.

### Semântica Dinâmica

- Atribuições alteram o valor das variáveis no ambiente de execução.
- As expressões são processadas da esquerda para a direita.
- Instruções condicionais `if` executam o bloco apenas se a condição for verdadeira.
- A função `print(expr)` apenas exibe um valor, sem alterar variáveis.

---

## Exemplo de Código em CT

```ct
// Inicializa a variável x com 10
x = 10;

// Calcula y como x + 5
y = x + 5;

// Verifica se y é maior que 10
if y > 10 then
    // Exibe y se a condição for verdadeira
    print(y);
end
```

---

## Tokens Gerados pelo Lexer

```
ID("x"), ATRIB("="), NUM("10"), SEMI(";")
ID("y"), ATRIB("="), ID("x"), OP_ARIT("+"), NUM("5"), SEMI(";")
IF("if"), ID("y"), OP_REL(">"), NUM("10"), THEN("then")
PRINT("print"), LPAREN("("), ID("y"), RPAREN(")"), SEMI(";")
END("end")
```

---
