const express = require('express');
const cors = require('cors');
const server = require('http').Server(express);
const WebSocketServer = require("websocket").server;

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.set("port", 3000);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const test = require("./routes/test");

app.use("/test", test);

// En caso de origen permitido, recibimos el mensaje y lo mandamos
// de regreso al cliente
wsServer.on("request", (request: any) =>{
    const connection = request.accept(null, request.origin);
    
    console.log(request.key)

    connection.on("message", (message: any) => {
        console.log("Mensaje recibido: " + message.utf8Data);
        connection.sendUTF("Recibido: " + message.utf8Data);
    });
    connection.on("close", (reasonCode: string, description: string) => {
        console.log("El usuario se desconecto");
    });
});


// Iniciamos el servidor en el puerto establecido por la variable port (3000)
server.listen(app.get('port'), () =>{
    console.log('WebSocket iniciado en el puerto: ' + app.get('port'));
})