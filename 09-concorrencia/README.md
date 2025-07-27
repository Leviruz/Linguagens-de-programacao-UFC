# Cenário Prático: Verificação de Senhas em Lote com Concorrência

Este documento explora como otimizar o processo de verificação de senhas em sistemas que precisam validar grandes quantidades de senhas. A abordagem sequencial pode ser lenta, mas ao utilizar concorrência com System.Threading, podemos dividir a carga de trabalho e melhorar significativamente o desempenho.

---

## Contexto

Em sistemas que requerem a validação de senhas, é comum verificar se elas atendem a critérios de segurança, como comprimento mínimo, presença de números, letras e símbolos. Quando a quantidade de senhas a ser validada é grande (como 10.000 ou mais), a execução sequencial pode ser ineficiente. A utilização de concorrência, com múltiplas threads, permite dividir a carga de trabalho, aumentando a performance do sistema.

---

## Abordagem Sequencial

Na abordagem sequencial, o sistema valida cada senha individualmente. Considerando uma lista de 10.000 senhas e o tempo de verificação de 2 milissegundos por senha, o tempo total para validar todas as senhas seria de aproximadamente **20 segundos**.

---

## Abordagem Concorrente

Ao adotar concorrência, criamos várias **threads**, onde cada uma é responsável por validar um grupo de senhas. Se o sistema tiver 8 núcleos de processamento, a validação pode ser paralelizada, o que reduz significativamente o tempo total de execução.

---

## Implementação em C# (PasswordValidator.cs)

O código a seguir simula a validação de um conjunto de senhas, primeiro utilizando uma abordagem sequencial e depois com múltiplas threads, permitindo comparar os tempos de execução das duas abordagens.

---

## Explicação da Implementação

### Função de Trabalho: VerificarSenha

A função **VerificarSenha** recebe uma senha como string e simula a verificação computacional utilizando `Thread.Sleep()`. Ela valida se a senha atende aos critérios de segurança, que são:

- Comprimento ≥ 8 caracteres
- Contém pelo menos um número
- Contém pelo menos uma letra
- Contém pelo menos um símbolo

### Execução Sequencial

Na execução sequencial, o sistema percorre a lista de senhas utilizando um `foreach` tradicional, chamando a função **VerificarSenha** para cada senha.

### Execução Concorrente

Na execução concorrente, dividimos a lista de senhas em grupos. Para cada grupo, é criada uma nova thread, e todas as threads são iniciadas e armazenadas em uma lista. O método `Join()` é utilizado para aguardar a conclusão de todas as threads.

### Medição de Performance

Para medir o tempo de execução de ambas as abordagens, utilizamos `System.Diagnostics.Stopwatch`, que permite uma medição precisa da performance.

---

## Comparação

| Estratégia  | Núcleos Utilizados | Tempo Estimado |
| ----------- | ------------------ | -------------- |
| Sequencial  | 1                  | ~20 segundos   |
| Concorrente | Até 8              | ~3 segundos    |

---

## Como Usar

1. Crie um arquivo chamado **PasswordValidator.cs**.
2. Copie o código fornecido e cole no arquivo criado.
3. Compile o arquivo utilizando o comando:

```bash
csc PasswordValidator.cs
```
