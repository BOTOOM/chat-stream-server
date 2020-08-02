## server chat

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Descripción

servidor de chat usando [Nest](https://github.com/nestjs/nest) y [socket.io](https://socket.io/)

## Instalacion usando npm

```bash
$ npm install
```

## Ejecución usando npm

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Ejecucion e instalacion usando Docker y Docker-compose

***se requiere que ya previemanete se tenga instalado en la maquina docker y docker-compose***

- en la raiz de este proyecto ejecutar

  ```bash
  # construir imagen
  $ docker-compose build

  # levantar servicios
  $ docker-compose up -d

  # detener servicios
  $ docker-compose down
  ```
## License

  Nest is [MIT licensed](LICENSE).
