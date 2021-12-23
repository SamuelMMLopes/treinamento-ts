import { UsuarioController } from "../controllers/usuario-controller"
import { UsuarioRepository } from "../repositories/usuario-repository"
import { UsuarioService } from "../services/usuario-service"

export const usuarioFactory = () => {
    const usuarioRepository = new UsuarioRepository()
    const usuarioService = new UsuarioService(usuarioRepository)
    return new UsuarioController(usuarioService)
}