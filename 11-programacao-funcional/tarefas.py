from typing import List, Dict, Callable

Tarefa = Dict[str, any]

def calcular_tempo_total(tarefas: List[Tarefa], filtro: Callable[[Tarefa], bool]) -> int:
    """
    Calcula a soma do tempo das tarefas que atendem ao critério do filtro.

    :param tarefas: lista de tarefas, onde cada tarefa é um dicionário
    :param filtro: função que recebe uma tarefa e retorna True se a tarefa deve ser incluída na soma
    :return: total de tempo das tarefas que passaram pelo filtro
    """
    if not tarefas:
        return 0

    cabeça, *resto = tarefas

    if filtro(cabeça):
        return cabeça["tempo"] + calcular_tempo_total(resto, filtro)
    else:
        return calcular_tempo_total(resto, filtro)


if __name__ == "__main__":
    tarefas = [
        {"nome": "Estudar", "tempo": 120, "prioridade": 2},
        {"nome": "Exercícios", "tempo": 45, "prioridade": 3},
        {"nome": "Ler emails", "tempo": 15, "prioridade": 1},
        {"nome": "Reunião", "tempo": 60, "prioridade": 1},
    ]

    filtro = lambda tarefa: tarefa["tempo"] > 30

    total = calcular_tempo_total(tarefas, filtro)

    print(f"Tempo total das tarefas selecionadas: {total} minutos")
