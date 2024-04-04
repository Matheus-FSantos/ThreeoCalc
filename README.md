# ThreeoCalc - Matheus-FSantos

Olá, se você entrou nesse repositório é porque deseja ver a minha solução para teste que me foi proposto, pela empresa Threeo IT Company.

Como é possivel ver acima, estou utilizando uma convenção bem comum para organizar meu repositório, estou utilizando a idéia do ***monorepo***

> Monorepo: Um monorepo é um conceito de desenvolvimento de software onde todo o código-fonte de um projeto é mantido em um único repositório. Isso significa que todos os componentes, módulos e bibliotecas relacionados a um projeto são armazenados juntos, em vez de serem divididos em vários repositórios menores (os famosos Polyrepo). Utilizando essa abordagem, podemos simplificar o gerenciamento de dependências, facilitar a colaboração entre equipes e proporcionar uma visão unificada do código do projeto.

⚠️⚠️⚠️ IMPORTANTE: O BACK-END PODE TER LENTIDÃO. É importante freezar, para quem for testar o App, que o Back-End pode estar inativo quando você fizer a requisição, o Render, normalmente, desliga a sua aplicação caso ela fique x segundos sem receber nenhuma requisição, então, caso você entre e quando clicar para fazer login a tela de loading demorar muito, tenha em mente que é o Render que está rodando o Dockerfile para tratar sua requisição, então, somente espere e não saia da página, aguarde um instante que conseguirá utilizar a aplicação.

### 🎯 O que me foi proposto?

A idéia do projeto é simples, isso não quer dizer que era fácil, abstraindo tudo, ou seja, focando no que importa e excluindo os detalhes que talvez fossem meramente detalhes KKKK, a idéia do projeto era:

- "Crie uma calculadora".

Porém, saindo um pouco dessa abstração e voltando para os requisitos, o que me foi proposto é:

Criar uma API em C#, NodeJS* ou Python com as seguintes features:
- Método que recebe dois valores e um parâmetro para indicar a operação matemática desejada: somar, subtrair, multiplicar ou dividir. Essa rota permite acesso somente se o usuário estiver autenticado e ter autorização de acesso;
- Autenticação e autorização utilizando JWT e Bearer;

Criar frontend em Angular ou React* com as seguintes features:
- Tela que contém dois campos e quatro botões que executem as operações matemáticas criadas pela API. Ao inserir os valores nesses campos e clicar em um dos botões, deve-se chamar a API para calcular. Após isso, exibir o resultado na tela.
- Tela de login que deve chamar a API e obter o token de acesso.

Além desses, teve mais outro requisito, que foi pedido pelo entrevistador, que era: "Tudo conteinerizado".

### 🛠️ Técnologias

Obviamente, como todo teste, sigo ele a risca e acrecento mais algumas questões pontuais. Nesse teste não foi diferente, para esse teste, utilizei as seguintes técnologias:

- NodeJS (com TypeScript, para desenvolver minha API - porém, poderia ter usado Flask, Spring, Nest, e etc);
- React (com TypeScript, para desenvolver o meu Front-End - mas poderia ter usado Angular sem problema algum);
- Chakra UI (como lib de UI);
- Docker (para conseguir gerar a imagem do meu dockerfile, e subir um container da mesma, e até mesmo para auxilio na hora do deploy - abordo no README.md do Back-end)
- Git/Github (versionamento);
- Ubuntu (sistema operacional padrão, apenas preciosismo KKKKK);
- Express (para lidar com as rotas por parte do Back-End);
- Entre outros.

Acima está o core de todas as técnologias que utilizei, pode ter algo que utilizei, uma biblioteca ou algo similar, que não está na lista acima, porém, o principal está ai com sua devida explicação.

### 🎲 Dados para teste

Quando você for fazer login na plataforma, utilize os seguintes dados para ter a permissão para login:

email: matheus@gmail.com, senha: 1234
<br/>
email: admin@admin.com, senha: admin

tem mais um usuário, porém não lembro a senha que coloquei KKKKKK, mas com esses já consegue acessar!

### 🖋️ Considerações finais

Acredito que esse teste foi de suma importancia para o meu aprendizado, não falei anteriormente mas todo teste técnico que eu realizo aproveito para aprender algo, nesse teste técnico aprendi a utilizar a biblioteca ChakraUI (nunca tinha a utilizado na vida) e vi que ela é bem parecida com MaterialUI (que também aprendi em um teste técnico distante).

O ponto desse teste, na minha concepção, era entender como o desenvolvedor, nesse caso não só eu mas todos que fizeram o teste, trabalham com essa "idéia" de rotas privadas pelo lado do Front-End, afinal, foi solicitado que utilizassemos JWT token, que é uma abordagem totalmente de mercado.

Outro ponto que acredito é a questão do back-end, poderiamos simplesmente utilizar 1 endpoint para cada método, tipo:

- post: /api/calculate/addition
- post: /api/calculate/subtraction
- post: /api/calculate/multiply
- post: /api/calculate/division

Porém, a idéia em si era ver como você trabalharia com os Query params e como você faria o seu código se adaptar de acordo com as informações que viriam para ele (justamente pelos query params), isso é uma abordagem que, obviamente, pode ser feita de diversas maneiras e o importante é: Não existe um certo ou um errado, porém, existe um que é mais legivel do que o outro.

Enfim, espero muito passar nesse teste, gostei muito do resultado final, ficou exatamente como me foi proposto.

Se você for o recrutado, e estiver lendo até aqui: Obrigado pela oportunidade de poder realizar o teste e mostrar um pouco do que eu sei.
Se você for uma pessoa que está vendo de curioso (KKK): Tamo junto, deixa uma estrelinha ⭐ ai.

Até mais pessoas, e não se esquecam de ver o README.md de cada projeto separado.

### 📜 Informações

> Autor: Matheus-FSantos (eu).</br>
> Destino: Threeo IT Company.</br>
> Tempo de desenvolvimento: 1 dia (03/04 -> 04/04).</br>
> Abril de 2024.
