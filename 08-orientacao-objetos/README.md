# Sistema de Gerenciamento de Transportes

Este projeto visa ilustrar conceitos fundamentais da Programação Orientada a Objetos (POO), utilizando o domínio de veículos. A aplicação segue uma estrutura simples com diferentes tipos de transportes, demonstrando os principais pilares da POO, como abstração, herança, encapsulamento e polimorfismo.

## POO

Este projeto foi projetado para mostrar claramente os quatro pilares principais da Programação Orientada a Objetos:

### Abstração

A classe `Veiculo` foi definida como uma classe base abstrata. Ela define os atributos e métodos comuns a todos os tipos de veículos, como `marca`, `modelo` e `velocidade`. A implementação de métodos específicos, como o método `mover()`, é deixada para as subclasses que herdam essa classe base. Isso permite que os detalhes de implementação sejam ocultados, proporcionando uma interface mais simples para os usuários do sistema.

### Herança

A classe `Carro` e a classe `Bicicleta` herdam da classe `Veiculo`. Essas classes especializadas adicionam suas próprias propriedades e métodos, como o número de portas para o carro e a presença de campainha na bicicleta. A herança permite reutilizar o código da classe base, minimizando a duplicação e promovendo a organização e escalabilidade do sistema.

### Encapsulamento

A classe `Veiculo` possui propriedades privadas e protegidas, como `marca` e `modelo`, garantindo que essas informações não possam ser modificadas diretamente de fora da classe. Métodos de acesso, como `mover()`, fornecem a funcionalidade necessária sem expor detalhes desnecessários. Isso protege o estado interno do objeto, mantendo a integridade dos dados e prevenindo modificações indesejadas.

### Polimorfismo

A classe base `Veiculo` define o método `mover()`, mas esse método é implementado de forma diferente nas classes `Carro` e `Bicicleta`. Ao utilizar polimorfismo, podemos invocar o método `mover()` de qualquer tipo de veículo sem nos preocupar com a implementação específica. Isso permite que o código seja mais flexível e que diferentes tipos de veículos sejam tratados de maneira uniforme.

## Estrutura do Projeto

A estrutura do projeto é modular, com cada classe definida em um arquivo separado, o que facilita a leitura, manutenção e extensão do código. Abaixo está a descrição dos principais arquivos:

- **Veiculo.ts**  
  Contém a classe base `Veiculo`, que define as propriedades e métodos gerais de qualquer veículo. Inclui o método `mover()`, que é um contrato a ser implementado pelas subclasses.

- **Carro.ts**  
  Implementa a classe `Carro`, que herda de `Veiculo`. Adiciona a propriedade `portas` e implementa o método `mover()`, especificando o comportamento de movimentação de um carro.

- **Bicicleta.ts**  
  Define a classe `Bicicleta`, que também herda de `Veiculo`. Inclui a propriedade `temCampainha` e implementa o método `mover()`, com o comportamento de movimentação específico para uma bicicleta.

- **index.ts**  
  Arquivo principal que contém o ponto de entrada da aplicação. Nele, instanciamos os diferentes tipos de veículos e chamamos os métodos, demonstrando a utilização de polimorfismo e os conceitos de POO na prática.

## Exemplo de Execução

Ao executar o sistema, o comportamento será o seguinte:

```plaintext
Toyota Corolla Tá se movendo a uma velocidade de: 180 km/h
Abrindo 4 portas
Trek Domane Tá se movendo a uma velocidade de: 30 km/h
Tocando o sino
```
