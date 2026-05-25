# SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior

## Objetivo do Projeto

O **SkillMatch JS** é um sistema desenvolvido em JavaScript puro para simular a análise de compatibilidade entre uma pessoa candidata e vagas fictícias de desenvolvimento Front-End Júnior.

O projeto compara as habilidades do candidato com os requisitos técnicos das vagas, calculando automaticamente:

- percentual de compatibilidade;
- habilidades encontradas;
- habilidades faltantes;
- classificação da compatibilidade;
- vaga com maior aderência;
- recomendações de estudo.

O objetivo principal do projeto é praticar os principais conceitos estudados no Módulo 01 do curso de Desenvolvimento Front-End.

---

#  Como Executar o Projeto

Este projeto pode ser executado tanto no navegador quanto no Node.js.

## ✔️ Opção 1 — Executar no Navegador

1. Abra o Google Chrome;
2. Pressione `F12` ou `Ctrl + Shift + J`;
3. Abra a aba **Console**;
4. Copie todo o conteúdo do arquivo `skillmatch.js`;
5. Cole no console;
6. Pressione `Enter`.

---

## ✔️ Opção 2 — Executar no VS Code com Node.js

1. Abra o projeto no VS Code;
2. Abra o terminal integrado;
3. Execute o comando:


node skillmatch.js

---

# Conceitos Técnicos Aplicados

## Fundamentos de Redes e Internet

### Como a Internet Funciona

A internet é uma rede global de computadores conectados que trocam informações através de protocolos padronizados, como TCP/IP. Esses protocolos permitem o envio e recebimento de dados entre dispositivos em qualquer lugar do mundo.

### Arquitetura Cliente-Servidor

O projeto simula o modelo cliente-servidor:

- Cliente → sistema executado pelo usuário;
- Servidor → simulação de carregamento das vagas usando Promise e setTimeout.

---

# 💻 Tecnologias Utilizadas

- JavaScript
- VS Code
- Git
- GitHub
- GitHub Desktop
- Trello (Kanban)

---

# 🔧 Extensões Recomendadas VS Code

- Git Graph

---

# 📚 Conceitos de JavaScript Utilizados

## Variáveis e Escopo

### `var`

Possui escopo global ou de função, sofre hoisting e pode ser redeclarada.

### `let`

Possui escopo de bloco e permite reatribuição de valor.

### `const`

Possui escopo de bloco e foi priorizada neste projeto para garantir maior segurança e imutabilidade das referências.

---

## Lógica de Programação

- condicionais `if/else`;
- operadores matemáticos;
- operadores lógicos;
- cálculo percentual;
- laços de repetição;
- separação de responsabilidades em funções.

---

## Arrays e Métodos de Array

Métodos utilizados:

- `.map()`
- `.filter()`
- `.reduce()`
- `.includes()`
- `.concat()`

---

## Programação Orientada a Objetos (POO)

O projeto utiliza:

- classes;
- construtores;
- atributos;
- métodos;
- herança;
- uso de `this`;
- instâncias de classe.

---

## Closures

Foi implementado um contador privado de análises utilizando closure.

---

## Callbacks

Foi criada uma função que recebe outra função como parâmetro para finalizar o processo de análise.

---

## Promises e Async/Await

O sistema simula o carregamento de vagas vindas de um servidor utilizando:

- Promise;
- setTimeout;
- async/await.

---

# 📁 Estrutura do Projeto

```txt
skillmatch-js/
│
├── skillmatch.js
└── README.md
```



# Organização do Projeto (Kanban)

O desenvolvimento do projeto foi organizado utilizando metodologia Kanban com as seguintes colunas:

- Backlog
- A Fazer
- Em Andamento
- Concluído

O objetivo foi organizar tarefas, acompanhar o progresso e simular um fluxo profissional de desenvolvimento.

---

# 🌱 GitHub Flow e Versionamento

O projeto foi versionado utilizando Git e GitHub seguindo um fluxo simplificado de branches:

## Branches utilizadas

- `main`
- `develop`
- `feat/laco-repeticao`
- `feat/instancia-poo`
- `docs/readme-final`

---

# 🧩 Funcionalidades do Sistema

✔️ Cadastro de candidato

✔️ Cadastro de vagas fictícias

✔️ Cálculo de compatibilidade

✔️ Classificação por percentual

✔️ Identificação de habilidades faltantes

✔️ Identificação da vaga ideal

✔️ Recomendação automática de estudos

✔️ Simulação assíncrona de carregamento de dados

✔️ Contador de auditoria com closure

---

# 📹 Vídeo de Demonstração

🔗 https://drive.google.com/file/d/1dCNrT9Td76dNrz-kY8Xgdn55VtgO_dZ6/view?usp=sharing

---

# 🔗 Links Oficiais

## Repositório GitHub

🔗 https://github.com/AngelicaLorenz/SkillMatch-JS-Simulador-de-Compatibilidade-com-Vaga-Front-End-J-nior

## Quadro Kanban Trello

🔗 https://trello.com/invite/b/6a0f3d695487982220304272/ATTIb699c3ed82600161a99fd331b36dc96aC0928BFD/skillmatch-js-simulador-de-compatibilidade-com-vaga-front-end-junior

---

#  Desenvolvido por

## Angélica Lorenz

Projeto desenvolvido para fins educacionais no curso de Desenvolvimento Front-End SCTEC.
