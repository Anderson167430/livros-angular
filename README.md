# Projeto Angular — Catálogo de Livros

Projeto desenvolvido com Angular 16, Angular Router, FormsModule e Bootstrap 5. Ele contempla o catálogo de livros, exclusão, formulário de cadastro, seleção de editora e navegação entre telas.

## 1. Requisitos

Instale no computador:
- Node.js (recomendado: versão 18 LTS)
- Visual Studio Code

## 2. Abrir o projeto

1. Extraia o arquivo ZIP.
2. Abra o Visual Studio Code.
3. Clique em **Arquivo > Abrir Pasta**.
4. Selecione a pasta `livros-angular` que foi extraída.

## 3. Instalar as dependências

No VS Code, abra **Terminal > Novo Terminal** e execute:

```bash
npm install
```

Aguarde a instalação terminar. É necessário estar conectado à internet nessa etapa.

## 4. Executar o sistema

No mesmo terminal, execute:

```bash
npm start
```

Depois, abra o navegador no endereço:

```text
http://localhost:4200/
```

Para parar o servidor, volte ao terminal e pressione `Ctrl + C`.

## 5. Testar o trabalho

1. A página inicial abre o **Catálogo** com três livros de exemplo.
2. Clique em **Novo** no menu superior.
3. Preencha o título, o resumo, selecione uma editora e informe os autores (um por linha).
4. Clique em **Salvar livro**. O sistema retorna ao catálogo.
5. Confira o novo livro na tabela.
6. Clique em **Excluir** para remover um livro e confirme a operação.

## 6. Estrutura principal

- `src/app/models`: classes `Livro` e `Editora`.
- `src/app/services`: serviços de editoras e livros.
- `src/app/components/livro-lista`: tela de catálogo.
- `src/app/components/livro-dados`: formulário de cadastro.
- `src/app/app-routing.module.ts`: configuração das rotas.
- `src/app/app.module.ts`: módulos, componentes e injeção dos serviços.

## Observação importante

Os dados ficam em memória enquanto o aplicativo está aberto. Ao atualizar a página ou reiniciar o servidor, os livros cadastrados voltam aos dados iniciais. Isso atende ao escopo do exercício, que solicita vetores nos serviços, e não um banco de dados.
