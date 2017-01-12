# sigeva/web-dashboard
Versão web para gerenciamento e acesso do sigeva.

![Angular](https://img.shields.io/badge/Angular-2.4.2-green.svg)
![Node](https://img.shields.io/badge/Node.js-v7.0.0-green.svg)
![NPM](https://img.shields.io/badge/npm-v3.10.3-blue.svg)
![Express](https://img.shields.io/badge/Express-v4.14.0-lightgrey.svg)

## Instalação
Mova-se para o diretório '/sigeva-web-dashboard' e instale as dependências com **npm**
```
# cd /path/to/sigeva/sigeva-web-dashboard
# npm install
# npm run typings install
```
Por fim, para inicializar o serviço e a codificação:
```
# npm start
```

## Deployment
O Seminário CCSA utiliza o serviço PM2 da Keymetrics como gerenciador de processos Node.JS. ([Conheça aqui](http://pm2.keymetrics.io/)).

Em modo de produção um único script é utilizado para fazer deploy e monitoramento de toda aplicação (core). 
Para fazer deploy somente do core, execute os seguintes passos (com pm2 instalado):
```
# pm2 start process.yml --env [production|development]
```
O pm2 irá iniciar 4 instancias do core. Para monitorar em tempo real estas instancias, informações de uso de memória e processamento execute:
```
pm2 monit
```
O resultado será parecido com este: (Alterar)

![](http://i.imgur.com/Qn7rcIA.png)
