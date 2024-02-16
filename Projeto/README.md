# **CSI606-2021-02 - Remoto - Trabalho Final**

## *Aluna(o): Marco Túlio Mendes Madeira*

# **CSI606-2021-02 - Remoto - Proposta de Trabalho Final**

--------------

<!-- Descrever um resumo sobre o trabalho. -->

### Resumo

  O trabalho se trata de uma aplicação para reserva de quartos de hóteis.

<!-- Apresentar o tema. -->
### 1. Tema

  O trabalho final tem como tema o desenvolvimento de uma página web para reserva de hotel. Existirá dois páneis, um para os usuários comuns e outro para os administradores. 
  
<!-- Descrever e limitar o escopo da aplicação. -->
### 2. Escopo

  Este projeto terá as seguintes funcionalidades, adicionar hótel, adicionar quarto de hotel, adicionar reserva, e vizualizar reservas e hóteis.

<!-- Apresentar restrições de funcionalidades e de escopo. -->
### 3. Restrições

  Neste trabalho não serão considerados no front todos os cruds possíveis, apenas os necessarios para o fluxo principal da aplicação. Apesar disso, os endpoints para as mesmas estarão disponíveis na api, apenas não serão utilizados no front.

<!-- Construir alguns protótipos para a aplicação, disponibilizá-los no Github e descrever o que foi considerado. //-->
### 4. Protótipo

  Protótipos para a página principal foram elaborados, e podem ser encontrados nesse diretório com o nome "Hotel.jpg".


# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

  O trabalho se trata de uma aplicação para reserva de quartos de hotéis. A ideia era que essa empresa fosse focada em turismo natural, e oferecesse não apenas um local para dormir, mas toda uma programação de viagem. Para isso foi criado dois tipos de visualizações básicas. A primeira foi para visualizar, acessar e reservar um hotel, a segunda para administradores, sendo possível criar novos hotéis e quartos desses hotéis.

### 1. Funcionalidades implementadas

Todas as funcionalidades previstas foi implementadas.
  
### 2. Funcionalidades previstas e não implementadas

Não houve nenhuma funcionalidade prevista não implementada, apesar disso, a diversas possíveis melhorias.

### 3. Outras funcionalidades implementadas

Não houve.

### 4. Principais desafios e dificuldades

A principal dificuldade da execução da tarefa foi a modelagem do banco de dados, pois ele define todo o fluxo que a aplicação. Esta dificuldade permite uma futura melhora no fluxo da aplicação, que apesar de estar Ok, não é o melhor possível, principalmente na parte de como a reserva ocorre no banco. 

### 5. Instruções para instalação e execução

#### 5.1 No front:

npm install

npm run dev

#### 5.2 Na api:

npm install

npx prisma db push

