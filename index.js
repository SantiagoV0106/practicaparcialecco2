import {express, Server, cors, os, SerialPort, ReadlineParser} from './dependencias.js'
const SERVER_IP = "192.168.1.28"

const server = express()
const PORT = 5050

// const protocolConfiguration = {
//     path : 'COM3', //Cambia dependiendo del puerto
//     bauRate : 9600
// }

// const port = new SerialPort(protocolConfiguration)
// const parser = port.pipe(new ReadlineParser)

// parser.on('data', (arData)=> {

//     let splitedData = arData.split(' ')

//     let arduinoMessage = {

//         saludo : splitedData[0] ,
//         valor : splitedData[1]

//     }

//     console.log(arduinoMessage);
//     socket emit arduino
//     io.emit('paquete1', arduinoMessage)

// })

server.use(cors({origin : '*'}))
server.use(express.json())
server.use('/client', express.static('client'))

const httpServer = server.listen(PORT, ()=> {

console.log(`Server is running, host http://${SERVER_IP}:${PORT}/`);

console.table({
    'Client Endpoint' : `http://${SERVER_IP}:${PORT}/client`
})
})

const io = new Server(httpServer, {path : '/real-time'})

io.on('connection', (socket)=> {
    console.log('Connected ', socket.id);
})

// Get and Post with express

let userData

server.post('/user-data', (req, res)=>{
userData = req.body
console.log(userData);
})

server.get('/get-user', (req, res)=>{
res.send(userData)
})










