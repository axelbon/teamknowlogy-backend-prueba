# teamknowlogy-backend-prueba

### Codigo back end para prueba fullstack.

## Instalacion

Use el administrador de paquetes npm o yarn para instalar todas las dependencias

```bash
npm install
```

## Uso

### Local
Iniciar servidor, el servidor arrancara en el puerto:  3300

```bash
node server.js
```
Para usar la api localmente deberás acceder con los siguiente endpoints:

* http://localhost:3300/send-email
* http://localhost:3300/mutation
* http://localhost:3300/stats

### AWS Api

Para usar la api deberas acceder a los siguiente endpoints:
* http://ec2-3-15-140-76.us-east-2.compute.amazonaws.com:3300/send-email
* http://ec2-3-15-140-76.us-east-2.compute.amazonaws.com:3300/mutation
* http://ec2-3-15-140-76.us-east-2.compute.amazonaws.com:3300/stats


### Endpoints

-------------  | JSON body example | Response | 
--- | ---  | --- |
send-email | { "emailAddress": "email@example.com" } | status: enviado / error |
mutation| { "dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] } | {"mutacion": true / false, "mutaciones": { "vertical": true / false, "horizontal": true / false,        "diagonalIzqDer": true / false, "diagonalDerIzq": true / false } } |
stats | | { "stats": { "count_mutations": 0, "count_no_mutation": 0,"ratio": 0 } } |

