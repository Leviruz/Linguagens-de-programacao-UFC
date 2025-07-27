# Organizador Automático de Arquivos por Tipo

## Contexto

Linguagens de script, como Python, são ferramentas extremamente eficientes para automatizar tarefas repetitivas e cotidianas, proporcionando agilidade tanto para desenvolvedores quanto para usuários comuns. Diferente das linguagens compiladas, que priorizam a performance, as linguagens de script têm foco na rapidez de desenvolvimento e integração direta com o sistema operacional.

Um problema comum enfrentado por muitos usuários é a desorganização da pasta de downloads, onde arquivos de diferentes tipos se misturam, tornando difícil localizar documentos, imagens ou outros itens. Para resolver esse problema, este projeto apresenta um script simples que organiza automaticamente os arquivos, movendo-os para pastas separadas de acordo com o tipo de arquivo.

## Organização Inteligente de Arquivos

O script examina uma pasta de origem, identifica o tipo de cada arquivo com base em sua extensão e os transfere para subpastas apropriadas dentro de uma pasta de destino. Esse processo de organização facilita o acesso aos arquivos, mantendo o diretório mais limpo e estruturado.

### Funcionalidades Principais

- **Classificação por extensão:** Um dicionário é utilizado para mapear as extensões de arquivos para nomes de pastas específicas (como "Imagens", "Documentos", "Vídeos"), permitindo uma categorização organizada e clara.
- **Criação dinâmica de pastas:** Antes de mover um arquivo, o script verifica se a pasta de destino já existe. Caso não exista, ela é criada automaticamente.
- **Movimentação segura:** O módulo shutil é usado para mover os arquivos, garantindo que a integridade dos dados seja preservada durante o processo.

- **Relatório detalhado:** Ao final do processo, o script gera um relatório que informa quantos arquivos foram organizados em cada categoria e também aponta os arquivos que não puderam ser classificados.

## Como usar

1. **Preparação das pastas:** O script cria automaticamente as pastas de origem e destino no diretório onde está localizado, caso ainda não existam.

2. **Adicionar arquivos:** Coloque os arquivos que você deseja organizar na pasta de origem.

3. **Executar o script:** Abra o terminal, navegue até o diretório onde o script está salvo e execute-o.
