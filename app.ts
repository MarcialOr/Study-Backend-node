import dotenv from 'dotenv'
import Server from './src/models/server.model'

dotenv.config()

try {
    const server = new Server()
    server.listen()
} catch (error) {
    console.error("Something wrong is  happening with the server: " + error)
}