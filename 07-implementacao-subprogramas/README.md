# Recursão e Pilha de Chamadas: Soma de Elementos em uma Lista

Este documento aborda a utilização de recursão para somar os elementos de uma lista e, com isso, compreender o funcionamento da pilha de chamadas durante a execução de funções recursivas.

---

## Visão Geral

O objetivo é calcular a soma de todos os elementos de uma lista utilizando uma função recursiva. A abordagem consiste em somar o primeiro elemento da lista ao resultado da chamada recursiva com o restante da lista. Essa técnica permite observar como o sistema empilha e desempilha chamadas de função.

---

## Pilha de Chamadas

A pilha de chamadas funciona como uma pilha de livros: apenas o elemento do topo pode ser manipulado a qualquer momento. A cada nova chamada de função, um novo quadro de execução é adicionado ao topo da pilha. Este quadro contém:

- Os argumentos passados à função.
- Variáveis locais da função.
- A posição do código onde o programa deve continuar após o término da função.

Quando a função finaliza, seu quadro é removido e o programa prossegue de onde havia parado.

---

## Exemplo em C#: Soma Recursiva de Lista

No exemplo abaixo, uma função recursiva percorre uma lista de inteiros e realiza a soma de todos os elementos. A recursão segue até que o índice fornecido ultrapasse o tamanho da lista, momento em que a função retorna zero (caso base).

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static int SomaLista(List<int> lista, int indice)
    {
        if (indice >= lista.Count)
            return 0;

        return lista[indice] + SomaLista(lista, indice + 1);
    }

    static void Main()
    {
        List<int> numeros = new List<int> { 2, 4, 6, 8 };
        int resultado = SomaLista(numeros, 0);
        Console.WriteLine($"Soma dos elementos: {resultado}");
    }
}
```

---

## Etapas da Execução Recursiva

### Empilhamento (Chamadas Recursivas)

1. `SomaLista(lista, 0)` é chamada. A execução espera o resultado de `SomaLista(lista, 1)`.
2. `SomaLista(lista, 1)` é chamada. A execução espera `SomaLista(lista, 2)`.
3. `SomaLista(lista, 2)` é chamada. A execução espera `SomaLista(lista, 3)`.
4. `SomaLista(lista, 3)` é chamada. A execução espera `SomaLista(lista, 4)`.
5. `SomaLista(lista, 4)` é chamada. O índice 4 excede o tamanho da lista, portanto a função retorna 0.

### Desempilhamento (Retorno das Chamadas)

1. `SomaLista(lista, 4)` retorna 0.
2. `SomaLista(lista, 3)` calcula `8 + 0 = 8` e retorna 8.
3. `SomaLista(lista, 2)` calcula `6 + 8 = 14` e retorna 14.
4. `SomaLista(lista, 1)` calcula `4 + 14 = 18` e retorna 18.
5. `SomaLista(lista, 0)` calcula `2 + 18 = 20` e retorna 20.

---

## Conclusão

O exemplo acima demonstra como cada chamada recursiva é empilhada com suas informações de execução, aguardando o retorno da chamada subsequente. Assim que o caso base é atingido, as chamadas começam a retornar seus valores, e a pilha é esvaziada gradualmente. O processo finaliza com o resultado acumulado da operação: a soma de todos os elementos da lista.
