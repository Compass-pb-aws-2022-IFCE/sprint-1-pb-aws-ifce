<h1 class="code-line" align="center" data-line-start=0 data-line-end=1 ><a id="Avaliao_Sprint_1_0"></a>Avaliação Sprint 1</h1>
<h3 class="code-line" align="center" data-line-start=1 data-line-end=2 ><a id="_Criando_um_container_com_docker_rodando_express__1"></a><em>Criando um container com docker rodando express!</em></h3>
<hr>
<h2 class="code-line" data-line-start=3 data-line-end=4 ><a id="Por_que_Docker_3"></a>Por que Docker?</h2>
<ul>
<li class="has-line-data" data-line-start="5" data-line-end="6"><strong>Segurança</strong>, o docker cria um ambiente sem interferências externas.</li>
<li class="has-line-data" data-line-start="6" data-line-end="7"><strong>Organização</strong>, já que pode-se dividir vários serviços entre containers diferentes.</li>
<li class="has-line-data" data-line-start="7" data-line-end="8"><strong>Performance</strong>, rodar uma imagem docker é bem mais leve que rodar uma máquina virtual.</li>
<li class="has-line-data" data-line-start="8" data-line-end="10"><strong>Replicação</strong>, pois é muito simples compartilhar imagens com outras pessoas.</li>
</ul>
<h2 class="code-line" data-line-start=10 data-line-end=11 ><a id="Como_o_projeto_se_relaciona_com_os_estudos_feitos_10"></a>Como o projeto se relaciona com os estudos feitos?</h2>
<p class="has-line-data" data-line-start="11" data-line-end="12">Cursos feitos:</p>
<ul>
<li class="has-line-data" data-line-start="12" data-line-end="13">Gestão Ágil com Scrum COMPLETO</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">Métodos ágeis de A a Z</li>
<li class="has-line-data" data-line-start="14" data-line-end="15">Segurança em Aplicações WEB</li>
<li class="has-line-data" data-line-start="15" data-line-end="16">Git Completo: Do Básico ao Avançado</li>
<li class="has-line-data" data-line-start="16" data-line-end="18">JavaScript do básico ao avançado</li>
</ul>
<blockquote>
<p class="has-line-data" data-line-start="18" data-line-end="21">Primeiramente é importante ressaltar que o conhecimento de <strong>Scrum e metodologias Ágeis</strong> foi um grande facilitador no<br>
processo de estudo. As dailys e a auto-organização me deram mais objetivo e controle, sobre o que eu deveria estudar e fazer.<br>
Então esse projeto só pode ser feito graças a toda metodologia que aprendi nos cursos de <em>agile</em>.</p>
</blockquote>
<blockquote>
<p class="has-line-data" data-line-start="22" data-line-end="24">Em seguida vêm o de <strong>Javascript</strong>, mesmo que com conhecimento prévio sempre é importante revisar os conteúdos para o constante aprimoramento!<br>
e sem esse conhecimento seria difícil compreender por exemplo o código do express, ou como o node funciona.</p>
</blockquote>
<blockquote>
<p class="has-line-data" data-line-start="25" data-line-end="28">O de <strong>Docker</strong> também foi imprescindível, já que é uma core feature do projeto.<br>
Com o Docker é possível o encapsulamento do código, que é executado em um container.<br>
Só assim eu posso ter certeza que o código funcionará em qualquer outro lugar!</p>
</blockquote>
<blockquote>
<p class="has-line-data" data-line-start="29" data-line-end="32">E por último o de <strong>Git!</strong> que possibilitou que eu e meus colegas possamos compartilhar essa avaliação.<br>
Além disso ele provê um ambiente completo de desenvolvimento, podendo também fazer o<br>
versionamento, compartilhar conhecimentos com outras pessoas dispostas a colaborar e muito mais.</p>
</blockquote>
<blockquote>
<p class="has-line-data" data-line-start="33" data-line-end="35">Infelizmente não consegui aplicar os conhecimentos de pen-testing aprendidas no curso de <strong>Segurança web.</strong><br>
Mas com toda certeza agora sou capaz de formular códigos mais seguros!</p>
</blockquote>
<h2 class="code-line" data-line-start=37 data-line-end=38 ><a id="Como_foi_feito_37"></a>Como foi feito?</h2>
<p class="has-line-data" data-line-start="39" data-line-end="40">Primeiro foi feito o código do “app.js” (Que está documentado explicando o que cada parte do código faz!)</p>
<p class="has-line-data" data-line-start="41" data-line-end="42">Depois foi necessário criar o package.json, que guarda informações e dependências do projeto, a partir do comando:</p>
<pre><code class="has-line-data" data-line-start="43" data-line-end="45" class="language-sh">npm init
</code></pre>
<p class="has-line-data" data-line-start="46" data-line-end="47">E instalar os pacotes a serem usados: express e nodemon.</p>
<pre><code class="has-line-data" data-line-start="48" data-line-end="51" class="language-sh">npm install --save express
npm install --save nodemon
</code></pre>
<p class="has-line-data" data-line-start="52" data-line-end="53">Depois criei um novo script para execução do código no package.json, no caso o start, usando o nodemon.</p>
<pre><code class="has-line-data" data-line-start="54" data-line-end="56" class="language-json">{"<span class="hljs-attribute">start</span>": <span class="hljs-value"><span class="hljs-string">"nodemon app.js"</span></span>}
</code></pre>
<p class="has-line-data" data-line-start="57" data-line-end="58">E por último foi só configurar o container através do Dockerfile! (Que também está documentado)</p>
<h2 class="code-line" data-line-start=61 data-line-end=62 ><a id="Como_executar_o_cdigo_61"></a>Como executar o código?</h2>
<blockquote>
<p class="has-line-data" data-line-start="63" data-line-end="64">Obs: Antes de tudo tenha certeza de ter o Docker instalado!</p>
</blockquote>
<p class="has-line-data" data-line-start="65" data-line-end="66">Primeiro, baixe o código ou clone o repositório.</p>
<p class="has-line-data" data-line-start="67" data-line-end="68">No diretório do projeto, abra o terminal e  digite:</p>
<pre><code class="has-line-data" data-line-start="70" data-line-end="72" class="language-sh">docker build -t docker-container-nodejs .
</code></pre>
<p class="has-line-data" data-line-start="72" data-line-end="74">Esse código gera uma imagem chamada “docker-container-nodejs” baseada no arquivo <strong>Dockerfile</strong> do projeto.<br>
O <strong>-t</strong> define o nome da imagem, e o <strong>.</strong> define o diretório que o código se encontra (nesse caso o diretório local)</p>
<p class="has-line-data" data-line-start="75" data-line-end="76">Em seguida o seguinte comando:</p>
<pre><code class="has-line-data" data-line-start="77" data-line-end="79" class="language-sh">docker run <span class="hljs-operator">-d</span> -p <span class="hljs-number">8000</span>:<span class="hljs-number">3000</span> -v node-app-volume:/data docker-container-nodejs
</code></pre>
<p class="has-line-data" data-line-start="79" data-line-end="84">Aqui o Docker gera um container baseado na imagem criada e o ínicia logo em seguida.<br>
O <strong>-d</strong> vem de <em>detached</em>, e serve para separar o processo do terminal.<br>
O <strong>-p</strong> é o encaminhamento de portas do container, no caso nós acessamos a porta 3000 pela porta 8000.<br>
O <strong>-v</strong> serve para criar um volume ligado ao container, “node-app-volume” é o nome do volume e “data” é o local do volume.<br>
E o “docker-container-nodejs” serve para indicar sobre qual imagem será montada o container.</p><br>
<div align="center">
<p class="has-line-data" data-line-start="85" data-line-end="86">E pronto! agora é só acessar localhost:8000</p>
<img src="https://media.tenor.com/DimzPZMypFcAAAAS/laptop.gif" width="180px">
</div>
