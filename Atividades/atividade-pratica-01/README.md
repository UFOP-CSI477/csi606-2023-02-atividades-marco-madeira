### API EM TYPESCRIPT UTILIZANDO FRAMEWORK EXPRESS E PRISMA:

#### Para utilizar a aplicação basta utilize npm install no dir /api_web. Ainda no mesmo dirétorio utilize npx prisma migrate para iniciar o banco de dados.

#### Atenção: As configurações do banco deve ser adequada, para isso vá até a pasta .env no dir /api_web e altere a url onde seu banco está rodando.

### TECNOLOGIAS:
#### Foi utilizado express para a criação das rotas de requisições, e para acessar e criar os dados do banco de dados foi utilizado o framework prisma, que permite mapear e consultar o mesmo.

### ARQUITETURA:
#### A api está estruturada em dois arquivos principais.
##### Api: Pasta onde contém aqruivos que consultam os bancos de dados e retornam está requisição ao cliente.
 - **Pasta database:** Possui uma constante que é usada durante as consultas do banco.
 - **Pasta service:** Contém as consultas e as rotas para requirir as mesmas. Cada tipo existente no sistema possui sua pasta neste dir. Dentro das mesmas possuimos router.ts e services.ts. Router.ts é responsável pela criação da url de requisição, ele é que dispara as funções de consulta ao banco que acontece no service.ts.   

### ROTAS:
#### Tipo de sangue:
 <summary><code>GET</code> <code><b>/bloodType/all</b></code> <code>Retorna toda a lista de tipos de sangue.</code></summary>
 <summary><code>POST</code> <code><b>/bloodType/create</b></code> <code>Cria um tipo de sangue.</code></summary>
 <summary><code>PATCH</code> <code><b>/bloodType/update</b></code> <code>Atualiza um tipo de sangue.</code></summary>
 <summary><code>DELETE</code> <code><b>/bloodType/delete</b></code> <code>Exclui um tipo de sangue.</code></summary>
 
#### Estado:
 <summary><code>GET</code> <code><b>/state/all</b></code> <code>Retorna toda a lista de estados.</code></summary>
 <summary><code>POST</code> <code><b>/state/create</b></code> <code>Cria um estado.</code></summary>
 <summary><code>PATCH</code> <code><b>/state/update</b></code> <code>Atualiza um estado.</code></summary>
 <summary><code>DELETE</code> <code><b>/state/delete</b></code> <code>Exclui um estado.</code></summary>
 
#### Cidade:
 <summary><code>GET</code> <code><b>/city/all</b></code> <code>Retorna toda a lista de cidades.</code></summary>
 <summary><code>POST</code> <code><b>/city/create</b></code> <code>Cria uma cidade.</code></summary>
 <summary><code>PATCH</code> <code><b>/city/update</b></code> <code>Atualiza uma cidade.</code></summary>
 <summary><code>DELETE</code> <code><b>/city/delete</b></code> <code>Exclui uma cidade.</code></summary>
 
#### Pessoa:
 <summary><code>GET</code> <code><b>/person/all</b></code> <code>Retorna toda a lista de pessoas.</code></summary>
 <summary><code>POST</code> <code><b>/person/create</b></code> <code>Cria uma pessoa.</code></summary>
 <summary><code>PATCH</code> <code><b>/person/update</b></code> <code>Atualiza uma pessoa.</code></summary>
 <summary><code>DELETE</code> <code><b>/person/delete</b></code> <code>Exclui uma pessoa.</code></summary>
 
#### Local de coleta:
 <summary><code>GET</code> <code><b>/donationPoint/all</b></code> <code>Retorna toda a lista de locais de coleta.</code></summary>
 <summary><code>POST</code> <code><b>/donationPoint/create</b></code> <code>Cria um local de coleta.</code></summary>
 <summary><code>PATCH</code> <code><b>/donationPoint/update</b></code> <code>Atualiza um local de coleta.</code></summary>
 <summary><code>DELETE</code> <code><b>/donationPoint/delete</b></code> <code>Exclui um local de coleta.</code></summary>

#### Coleta:
 <summary><code>GET</code> <code><b>/donation/all</b></code> <code>Retorna toda a lista de coletas.</code></summary>
 <summary><code>POST</code> <code><b>/donation/create</b></code> <code>Cria uma coleta.</code></summary>
 <summary><code>PATCH</code> <code><b>/donation/update</b></code> <code>Atualiza uma coleta.</code></summary>
 <summary><code>DELETE</code> <code><b>/donation/delete</b></code> <code>Exclui uma coleta.</code></summary>
