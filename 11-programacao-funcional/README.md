# Cálculo Funcional de Tempo de Tarefas

## Contexto

No cotidiano, gerenciamos uma série de tarefas com diferentes durações e prioridades. Muitas vezes, é necessário calcular o tempo total gasto em tarefas específicas, como aquelas que são mais longas ou mais importantes. Este projeto apresenta uma solução funcional para calcular o tempo total gasto em tarefas que atendem a um critério definido pelo usuário, utilizando recursão e funções de alta ordem.

## Conceitos Funcionais em Ação

Esta solução exemplifica os princípios da programação funcional:

- **Funções de Alta Ordem**: a função `calcular_tempo_total` recebe uma função `filtro` como argumento, o que proporciona flexibilidade para aplicar diferentes critérios de seleção das tarefas.
- **Funções Puras e Imutabilidade**: não há modificação dos dados originais; a lista de tarefas permanece inalterada, garantindo previsibilidade e segurança.
- **Recursão**: é utilizada para percorrer a lista de tarefas sem a necessidade de laços imperativos, simplificando a lógica e destacando a abordagem funcional.

## Descrição da Solução

Temos uma lista de tarefas, cada uma representada como um dicionário contendo as chaves:

- `nome`: nome da tarefa
- `tempo`: tempo estimado em minutos
- `prioridade`: nível de importância da tarefa

A função `calcular_tempo_total` recebe:

- uma lista de tarefas
- uma função `filtro` que determina se a tarefa será incluída no cálculo (função de alta ordem)

A função usa recursão para percorrer a lista e somar o tempo das tarefas que atendem ao filtro.

## Como usar

1. Defina sua lista de tarefas.
2. Crie um critério de filtro como uma função que recebe uma tarefa e retorna `True` ou `False`.
3. Chame `calcular_tempo_total(tarefas, filtro)` para obter o tempo total.

## Exemplo

```python
tarefas = [
    {"nome": "Estudar", "tempo": 120, "prioridade": 2},
    {"nome": "Exercícios", "tempo": 45, "prioridade": 3},
    {"nome": "Ler emails", "tempo": 15, "prioridade": 1},
]

filtro = lambda t: t["tempo"] > 30

total = calcular_tempo_total(tarefas, filtro)

print(f"Tempo total: {total} minutos")
# Saída: Tempo total: 165 minutos
