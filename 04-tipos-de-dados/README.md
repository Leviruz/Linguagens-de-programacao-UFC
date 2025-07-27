# Comparativo de Tipagem em Python, C# e JavaScript

Este documento apresenta uma comparação clara entre os sistemas de tipagem de três linguagens populares: **Python**, **C#** e **JavaScript**. O objetivo é ilustrar como cada uma trata os tipos de dados, com exemplos práticos e comentários.

---

## Python — Tipagem Dinâmica e Forte

- **Dinâmica**: O tipo da variável é determinado em tempo de execução.
- **Forte**: Não permite operações entre tipos incompatíveis sem conversão explícita.

```python
x = 10
print(type(x))  # <class 'int'>

x = "texto"
print(type(x))  # <class 'str'>

y = 5 + "3"      # Erro: não é possível somar inteiro com string
```

---

## C# — Tipagem Estática e Forte

- **Estática**: Os tipos são definidos no momento da declaração e verificados na compilação.
- **Forte**: Tipos diferentes não se misturam sem conversão explícita.

```csharp
int x = 10;
x = "texto";      // Erro de compilação

string s = "texto";
int y = s;        // Erro de compilação

int a = 5;
int b = 3;
int c = a + b;    // Operação válida entre inteiros
```

**Observações**:

- Tipagem rígida evita muitos erros de execução.
- Mais controle e segurança.

---

## JavaScript — Tipagem Dinâmica e Fraca

- **Dinâmica**: O tipo é atribuído durante a execução.
- **Fraca**: Realiza conversões implícitas entre tipos.

```javascript
let x = 10;
x = "texto"; // x agora é uma string

let y = 5 + "3"; // Resultado: "53" (concatenação)
let z = 5 - "3"; // Resultado: 2 (conversão implícita de string para número)
```

**Observações**:

- Permite muita flexibilidade, mas propenso a erros inesperados.
- Exige atenção redobrada ao manipular dados de tipos diferentes.
