import * as express from "express";
const app = express();


// No poner aquí las rutas a pelo, debemos importar el fichero index.ts del directorio routes, donde se cargarán todas las rutas de la API 
app.get("/", (req, res) => {
    console.log('Hello World, Im runing on Kubernetes and deployed via Azure Pipelines')
    res.send("Hello World")
})

app.get("/:name", (req, res) => {
    let name: string = req.param("name")
    console.log(`Hello ${name}`)
    res.send(`Hello ${name}`)
})

// Sustituir este PORT por una llamada al servidor de configuración que le diga en que puerto debe levantar el servidor 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})