# Sistema de Gerenciamento de Produtos
Este projeto foi desenvolvido utilizando Node.js com o objetivo de explorar e implementar o padrão de arquitetura MVC (Model-View-Controller), garantindo uma estrutura organizada e escalável para a aplicação. Além disso, foi aplicada a validação de campos para garantir a integridade dos dados inseridos.

 # 💡Usados para a construção

• Documentação Oficial do Node.js

• Express.js - Framework para Node.js

• Guia sobre o padrão MVC

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

# Estrutura MVC e Implementação

A arquitetura MVC foi utilizada para separar a lógica da aplicação em três camadas principais:

• Model: Responsável pela interação com o banco de dados, definindo os modelos de dados e suas regras de validação.

• View: Camada responsável pela apresentação da aplicação, enviando respostas ao usuário.

• Controller: Faz a mediação entre Model e View, processando requisições e aplicando regras de negócio.

As múltiplas formas de utilização do MVC foram aplicadas da seguinte maneira:

• Implementação de rotas que chamam controladores específicos para cada funcionalidade.

• Uso de middlewares para tratamento de requisições antes de serem processadas pelos controladores.

• Separação de responsabilidades para garantir código reutilizável e de fácil manutenção.

# 🧠 Como usar?

Clone este repositório:
 ```bash
git clone https://github.com/GiovannaAmaral26/projetonode.git
```
Instale as dependências:
 ```
npm install
```

Execute o servidor:
 ```bash
npm start
```

Acesse a aplicação pelo navegador em ``` http://localhost:3000 ```

