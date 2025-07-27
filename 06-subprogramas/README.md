# Passagem de Parâmetros: Comparativo entre Valor e Referência

Este documento explora como linguagens de programação lidam com a passagem de parâmetros. A análise se concentra nas distinções entre a passagem por valor e por referência em Python, C# e JavaScript.

---

## Python

Em Python, o comportamento da passagem de parâmetros varia conforme o tipo do dado:

- **Tipos imutáveis** (como int, float, str, tuple) são passados de forma que simula **passagem por valor**. Alterações feitas dentro da função **não afetam** o valor original.
- **Tipos mutáveis** (como list, dict, set) são tratados como **passagem por referência**. Alterações feitas dentro da função **modificam** o objeto original.

### Exemplo:

```python
def alterar_valor(x):
    x = 100
    print("Dentro da função (x):", x)

def alterar_lista(lista):
    lista.append(4)
    print("Dentro da função (lista):", lista)

a = 10
alterar_valor(a)
print("Fora da função (a):", a)

b = [1, 2, 3]
alterar_lista(b)
print("Fora da função (b):", b)
```

**Explicação:**

- `a` é um inteiro (imutável). Alterações na função não modificam o valor original.
- `b` é uma lista (mutável). A modificação feita dentro da função altera o conteúdo fora dela também.

---

## C#

Em C#, o padrão é a passagem **por valor**, mas é possível usar **passagem por referência** com os modificadores `ref` e `out`.

- **Por valor**: a função opera sobre uma **cópia** da variável, não alterando o valor original.
- **Por referência com `ref`**: a função acessa diretamente o valor original e qualquer alteração é refletida fora da função.
- **Por referência com `out`**: semelhante a `ref`, mas o parâmetro pode ser não inicializado antes da chamada da função.

### Exemplo:

```csharp
using System;

class Program {
    static void PorValor(int x) {
        x = 100;
        Console.WriteLine("Dentro da função (x): " + x);
    }

    static void PorReferencia(ref int x) {
        x = 100;
        Console.WriteLine("Dentro da função (x): " + x);
    }

    static void Main() {
        int a = 10;
        PorValor(a);
        Console.WriteLine("Fora da função (a): " + a);

        int b = 10;
        PorReferencia(ref b);
        Console.WriteLine("Fora da função (b): " + b);
    }
}
```

**Explicação:**

- A função `PorValor` opera sobre uma cópia de `a`; o valor original não é alterado.
- A função `PorReferencia` usa `ref`, alterando diretamente o valor de `b`.

**Observação:** Em C#, o uso de `ref` é obrigatório tanto na definição da função quanto na chamada.

---

## JavaScript

Em JavaScript, os tipos primitivos são passados **por valor**, enquanto objetos e arrays são passados **por referência**.

### Exemplo:

```javascript
function alterarNumero(x) {
  x = 100;
  console.log("Dentro da função (x):", x);
}

function alterarArray(arr) {
  arr.push(4);
  console.log("Dentro da função (arr):", arr);
}

let a = 10;
alterarNumero(a);
console.log("Fora da função (a):", a);

let b = [1, 2, 3];
alterarArray(b);
console.log("Fora da função (b):", b);
```

**Explicação:**

- `a` é um número (primitivo), passado por valor. A função recebe uma cópia, não alterando o original.
- `b` é um array (objeto), passado por referência. A função modifica diretamente o array original.

---
