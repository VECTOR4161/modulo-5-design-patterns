# Instalacion

Una vez con el sistema descargado y con una version de Node, en el caso de este sistema se uso la version de Node 22.15.0 puede iniciarse con la instalacion del sistema.

## Installation

Use el manejador de paquetes npm y siga los comandos a contiuacion en orden.

```bash
npm install
npx prisma generate
```
## Variables de Entorno

las dos variables de entorno son:
```
ENV= Donde se describe el numero de puerto por ejemplo 4200.
SECRET_KEY= La clave secreta usada para cifrar mediante JWT.